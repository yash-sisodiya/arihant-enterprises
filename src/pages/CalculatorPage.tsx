import React, { useState } from 'react';
import { Calculator, MessageCircle, Lightbulb, Tv, Fan, Smartphone, Plus, Minus } from 'lucide-react';
import Button from '../components/ui/Button';
import { calculateBackup } from '../data/services';
import { products } from '../data/products';
import { Card, CardContent } from '../components/ui/Card';

const CalculatorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fans: 0,
    lights: 0,
    tv: 0,
    refrigerator: 0,
    router: 0,
    other: 0,
  });
  
  const [result, setResult] = useState<{
    totalPower: number;
    requiredVA: number;
    batteryAh: number;
  } | null>(null);

  const handleChange = (field: keyof typeof formData, value: number) => {
    if (value >= 0) {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const handleCalculate = () => {
    const result = calculateBackup(formData);
    setResult(result);
  };

  const shareToWhatsApp = () => {
    if (!result) return;

    const phoneNumber = '917728962090';
    
    const message = `Battery Backup Calculation:\n\n` +
      `Appliances:\n` +
      `${formData.fans} Fans\n` +
      `${formData.lights} Lights\n` +
      `${formData.tv} TVs\n` +
      `${formData.refrigerator} Refrigerators\n` +
      `${formData.router} Routers/WiFi\n` +
      `${formData.other} Other Appliances\n\n` +
      `Results:\n` +
      `Total Power: ${result.totalPower} Watts\n` +
      `Required Inverter: ${result.requiredVA} VA\n` +
      `Required Battery: ${result.batteryAh} Ah\n\n` +
      `Please suggest suitable products for my requirements.`;
      
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const getRecommendedProducts = () => {
    if (!result) return [];

    // Filter products based on calculated requirements
    const recommendedInverters = products.filter(p => 
      p.category === 'inverter' && 
      p.capacity && 
      parseInt(p.capacity.replace(/[^0-9]/g, '')) >= result.requiredVA
    );

    const recommendedBatteries = products.filter(p => 
      p.category === 'inverter-battery' && 
      p.capacity && 
      parseInt(p.capacity.replace(/[^0-9]/g, '')) >= result.batteryAh
    );

    return {
      inverters: recommendedInverters.slice(0, 2),
      batteries: recommendedBatteries.slice(0, 2),
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Battery Backup Calculator</h1>
        <p className="text-gray-600 mb-8">
          Calculate the right inverter and battery capacity for your home based on your appliance usage.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Enter Your Appliances
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      <Fan className="h-5 w-5 mr-2" />
                      Fans
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleChange('fans', formData.fans - 1)}
                        className="p-2 border rounded-l-md text-gray-600 hover:bg-gray-100"
                        disabled={formData.fans <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        value={formData.fans}
                        onChange={(e) => handleChange('fans', parseInt(e.target.value) || 0)}
                        className="w-full p-2 border-t border-b text-center"
                      />
                      <button
                        onClick={() => handleChange('fans', formData.fans + 1)}
                        className="p-2 border rounded-r-md text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Approx. 75W per fan</p>
                  </div>

                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      <Lightbulb className="h-5 w-5 mr-2" />
                      LED Lights / Tube Lights
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleChange('lights', formData.lights - 1)}
                        className="p-2 border rounded-l-md text-gray-600 hover:bg-gray-100"
                        disabled={formData.lights <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        value={formData.lights}
                        onChange={(e) => handleChange('lights', parseInt(e.target.value) || 0)}
                        className="w-full p-2 border-t border-b text-center"
                      />
                      <button
                        onClick={() => handleChange('lights', formData.lights + 1)}
                        className="p-2 border rounded-r-md text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Approx. 15W per light</p>
                  </div>

                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      <Tv className="h-5 w-5 mr-2" />
                      Television
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleChange('tv', formData.tv - 1)}
                        className="p-2 border rounded-l-md text-gray-600 hover:bg-gray-100"
                        disabled={formData.tv <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        value={formData.tv}
                        onChange={(e) => handleChange('tv', parseInt(e.target.value) || 0)}
                        className="w-full p-2 border-t border-b text-center"
                      />
                      <button
                        onClick={() => handleChange('tv', formData.tv + 1)}
                        className="p-2 border rounded-r-md text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Approx. 120W per TV</p>
                  </div>

                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      Refrigerator
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleChange('refrigerator', formData.refrigerator - 1)}
                        className="p-2 border rounded-l-md text-gray-600 hover:bg-gray-100"
                        disabled={formData.refrigerator <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        value={formData.refrigerator}
                        onChange={(e) => handleChange('refrigerator', parseInt(e.target.value) || 0)}
                        className="w-full p-2 border-t border-b text-center"
                      />
                      <button
                        onClick={() => handleChange('refrigerator', formData.refrigerator + 1)}
                        className="p-2 border rounded-r-md text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Approx. 150W per refrigerator</p>
                  </div>

                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      <Smartphone className="h-5 w-5 mr-2" />
                      WiFi Router
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleChange('router', formData.router - 1)}
                        className="p-2 border rounded-l-md text-gray-600 hover:bg-gray-100"
                        disabled={formData.router <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        value={formData.router}
                        onChange={(e) => handleChange('router', parseInt(e.target.value) || 0)}
                        className="w-full p-2 border-t border-b text-center"
                      />
                      <button
                        onClick={() => handleChange('router', formData.router + 1)}
                        className="p-2 border rounded-r-md text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Approx. 20W per router</p>
                  </div>

                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-2">
                      Other Appliances
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleChange('other', formData.other - 1)}
                        className="p-2 border rounded-l-md text-gray-600 hover:bg-gray-100"
                        disabled={formData.other <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <input
                        type="number"
                        value={formData.other}
                        onChange={(e) => handleChange('other', parseInt(e.target.value) || 0)}
                        className="w-full p-2 border-t border-b text-center"
                      />
                      <button
                        onClick={() => handleChange('other', formData.other + 1)}
                        className="p-2 border rounded-r-md text-gray-600 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Approx. 100W per device</p>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleCalculate}
                  >
                    Calculate Backup Requirements
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div>
            {result ? (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Your Backup Requirements</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <p className="text-gray-600 text-sm mb-1">Total Power</p>
                        <p className="text-2xl font-bold text-blue-600">{result.totalPower}W</p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <p className="text-gray-600 text-sm mb-1">Inverter</p>
                        <p className="text-2xl font-bold text-blue-600">{result.requiredVA}VA</p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <p className="text-gray-600 text-sm mb-1">Battery</p>
                        <p className="text-2xl font-bold text-blue-600">{result.batteryAh}Ah</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">What This Means</h3>
                      <p className="text-sm text-gray-700">
                        Based on your appliance usage, you need an inverter with at least {result.requiredVA}VA capacity 
                        and a battery with at least {result.batteryAh}Ah capacity for approximately 3 hours of backup.
                      </p>
                    </div>

                    {/* Recommended Products */}
                    <div>
                      <h3 className="font-semibold mb-3">Recommended Products</h3>
                      
                      {getRecommendedProducts().inverters.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">Inverters:</p>
                          <ul className="space-y-2">
                            {getRecommendedProducts().inverters.map(product => (
                              <li key={product.id} className="bg-white border rounded-md p-3 flex items-center">
                                <div className="w-10 h-10 rounded overflow-hidden mr-3">
                                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                  <p className="font-medium">{product.name}</p>
                                  <p className="text-sm text-gray-600">{product.capacity}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {getRecommendedProducts().batteries.length > 0 && (
                        <div>
                          <p className="text-sm font-medium mb-2">Batteries:</p>
                          <ul className="space-y-2">
                            {getRecommendedProducts().batteries.map(product => (
                              <li key={product.id} className="bg-white border rounded-md p-3 flex items-center">
                                <div className="w-10 h-10 rounded overflow-hidden mr-3">
                                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                  <p className="font-medium">{product.name}</p>
                                  <p className="text-sm text-gray-600">{product.capacity}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <Button
                      variant="secondary"
                      size="lg"
                      fullWidth
                      icon={<MessageCircle className="h-5 w-5" />}
                      onClick={shareToWhatsApp}
                    >
                      Share Results on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col justify-center items-center text-center">
                <Calculator className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Calculate Your Backup Needs</h3>
                <p className="text-gray-600 mb-4">
                  Enter your appliance details on the left to calculate the optimal inverter and battery capacity for your needs.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;