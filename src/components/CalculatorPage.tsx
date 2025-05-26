import React, { useState } from 'react';
import { Calculator, MessageCircle, Lightbulb, Tv, Fan, Smartphone, Plus, Minus } from 'lucide-react';
import Button from '../components/ui/Button';
import { calculateBackup } from '../utils/calculator';
import { products } from '../data/products';
import { Card, CardContent } from '../components/ui/Card';
import { CONTACT } from '../config/constants';

const BATTERY_CAPACITIES = [150, 180, 200];

const CalculatorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fans: 0,
    lights: 0,
    tv: 0,
    refrigerator: 0,
    router: 0,
    other: 0,
  });
  
  const [selectedBatteryAh, setSelectedBatteryAh] = useState(150);
  const [result, setResult] = useState<{
    totalPower: number;
    requiredVA: number;
    batteryAh: number;
    backupHours: number;
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
    const result = calculateBackup(formData, selectedBatteryAh);
    setResult(result);
  };

  const shareToWhatsApp = () => {
    if (!result) return;

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
      `Battery Capacity: ${result.batteryAh} Ah\n` +
      `Estimated Backup: ${result.backupHours} hours\n\n` +
      `Please suggest suitable products for my requirements.`;
      
    window.open(`https://wa.me/${CONTACT.phone.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const getRecommendedProducts = () => {
    if (!result) return [];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 pt-24">
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
                  {/* Battery Capacity Selector */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Select Battery Capacity
                    </label>
                    <div className="flex gap-4">
                      {BATTERY_CAPACITIES.map((capacity) => (
                        <button
                          key={capacity}
                          onClick={() => setSelectedBatteryAh(capacity)}
                          className={`flex-1 py-2 px-4 rounded-lg border ${
                            selectedBatteryAh === capacity
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'border-gray-300 hover:border-blue-500'
                          }`}
                        >
                          {capacity}Ah
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Appliance inputs */}
                  {/* ... rest of the form remains the same ... */}
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <p className="text-gray-600 text-sm mb-1">Backup Time</p>
                        <p className="text-2xl font-bold text-blue-600">{result.backupHours}h</p>
                      </div>
                    </div>

                    {/* ... rest of the results section remains the same ... */}
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