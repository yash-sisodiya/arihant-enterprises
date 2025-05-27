import React, { useState } from 'react';
import { Calculator, MessageCircle, Lightbulb, Tv, Fan, Smartphone, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { calculateBackup } from '../utils/calculator';
import { products } from '../data/products';
import { Card, CardContent } from '../components/ui/Card';
import { CONTACT, THEME, BATTERY_CAPACITIES } from '../config/constants';

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
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 pt-24"
      initial={THEME.animations.fadeIn.initial}
      animate={THEME.animations.fadeIn.animate}
      transition={THEME.animations.fadeIn.transition}
    >
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-2 gradient-text"
          initial={THEME.animations.slideIn.initial}
          animate={THEME.animations.slideIn.animate}
          transition={THEME.animations.slideIn.transition}
        >
          Battery Backup Calculator
        </motion.h1>
        <motion.p 
          className="text-gray-600 mb-8"
          initial={THEME.animations.slideIn.initial}
          animate={THEME.animations.slideIn.animate}
          transition={{ ...THEME.animations.slideIn.transition, delay: 0.1 }}
        >
          Calculate the right inverter and battery capacity for your home based on your appliance usage.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gradient-text">
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
                        <motion.button
                          key={capacity}
                          onClick={() => setSelectedBatteryAh(capacity)}
                          className={`flex-1 py-2 px-4 rounded-lg border backdrop-blur-sm ${
                            selectedBatteryAh === capacity
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent'
                              : 'border-gray-300 hover:border-blue-500 bg-white/50'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {capacity}Ah
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Appliance inputs */}
                  {Object.entries(formData).map(([key, value]) => (
                    <motion.div
                      key={key}
                      initial={THEME.animations.slideIn.initial}
                      animate={THEME.animations.slideIn.animate}
                      transition={THEME.animations.slideIn.transition}
                    >
                      <label className="flex items-center text-gray-700 font-medium mb-2">
                        {key === 'fans' && <Fan className="h-5 w-5 mr-2" />}
                        {key === 'lights' && <Lightbulb className="h-5 w-5 mr-2" />}
                        {key === 'tv' && <Tv className="h-5 w-5 mr-2" />}
                        {key === 'router' && <Smartphone className="h-5 w-5 mr-2" />}
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <div className="flex items-center">
                        <motion.button
                          onClick={() => handleChange(key as keyof typeof formData, value - 1)}
                          className="p-2 border rounded-l-md text-gray-600 hover:bg-gray-100 bg-white/50 backdrop-blur-sm"
                          disabled={value <= 0}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Minus className="h-4 w-4" />
                        </motion.button>
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => handleChange(key as keyof typeof formData, parseInt(e.target.value) || 0)}
                          className="w-full p-2 border-t border-b text-center bg-white/50 backdrop-blur-sm"
                        />
                        <motion.button
                          onClick={() => handleChange(key as keyof typeof formData, value + 1)}
                          className="p-2 border rounded-r-md text-gray-600 hover:bg-gray-100 bg-white/50 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Plus className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="gradient-primary"
                      size="lg"
                      fullWidth
                      onClick={handleCalculate}
                    >
                      Calculate Backup Requirements
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div>
            {result ? (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6 gradient-text">Your Backup Requirements</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <motion.div
                        className="glass rounded-lg p-4 text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <p className="text-gray-600 text-sm mb-1">Total Power</p>
                        <p className="text-2xl font-bold gradient-text">{result.totalPower}W</p>
                      </motion.div>
                      
                      <motion.div
                        className="glass rounded-lg p-4 text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-gray-600 text-sm mb-1">Inverter</p>
                        <p className="text-2xl font-bold gradient-text">{result.requiredVA}VA</p>
                      </motion.div>
                      
                      <motion.div
                        className="glass rounded-lg p-4 text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-gray-600 text-sm mb-1">Battery</p>
                        <p className="text-2xl font-bold gradient-text">{result.batteryAh}Ah</p>
                      </motion.div>

                      <motion.div
                        className="glass rounded-lg p-4 text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <p className="text-gray-600 text-sm mb-1">Backup Time</p>
                        <p className="text-2xl font-bold gradient-text">{result.backupHours}h</p>
                      </motion.div>
                    </div>

                    <motion.div
                      className="glass rounded-lg p-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="font-semibold mb-2">What This Means</h3>
                      <p className="text-sm text-gray-700">
                        Based on your appliance usage and selected {selectedBatteryAh}Ah battery, 
                        you need an inverter with at least {result.requiredVA}VA capacity 
                        for approximately {result.backupHours} hours of backup.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="gradient-secondary"
                        size="lg"
                        fullWidth
                        icon={<MessageCircle className="h-5 w-5" />}
                        onClick={shareToWhatsApp}
                      >
                        Share Results on WhatsApp
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <motion.div 
                className="glass rounded-lg shadow-md p-8 h-full flex flex-col justify-center items-center text-center"
                initial={THEME.animations.scale.initial}
                animate={THEME.animations.scale.animate}
                transition={THEME.animations.scale.transition}
              >
                <Calculator className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 gradient-text">Calculate Your Backup Needs</h3>
                <p className="text-gray-600 mb-4">
                  Enter your appliance details and select battery capacity to calculate the optimal backup solution for your needs.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CalculatorPage;