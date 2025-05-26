import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Zap, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const offers = [
  {
    id: 1,
    title: "Summer Special Offer!",
    description: "Get up to 20% off on selected inverter batteries",
    tag: "Limited Time",
  },
  {
    id: 2,
    title: "Combo Deal!",
    description: "Buy inverter & battery together and save ₹2000",
    tag: "Best Value",
  },
  {
    id: 3,
    title: "Free Installation!",
    description: "Get free installation on all solar panel purchases",
    tag: "Special Deal",
  }
];

const PromotionalBanner: React.FC = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Tag className="h-6 w-6 mr-2 animate-bounce" />
            <span className="font-medium">{offers[currentOffer].title}</span>
            <span className="hidden md:inline ml-2">
              {offers[currentOffer].description}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center animate-pulse">
              <Zap className="h-5 w-5 mr-1" />
              <span className="font-bold">{offers[currentOffer].tag}</span>
            </div>
            <Link to="/products">
              <Button 
                variant="gradient-secondary" 
                size="sm"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Offer Indicators */}
        <div className="flex justify-center mt-2 md:mt-0 gap-2">
          {offers.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentOffer === index ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
              onClick={() => setCurrentOffer(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full transform -translate-y-1/2 animate-float"></div>
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-float-delayed"></div>
      </div>
    </div>
  );
};

export default PromotionalBanner;