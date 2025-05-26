import React from 'react';
import { Users, Wrench, Calendar, Phone } from 'lucide-react';
import { stats } from '../data/services';

const StatSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="h-10 w-10" />;
      case 'Wrench':
        return <Wrench className="h-10 w-10" />;
      case 'Calendar':
        return <Calendar className="h-10 w-10" />;
      case 'Phone':
        return <Phone className="h-10 w-10" />;
      default:
        return <Users className="h-10 w-10" />;
    }
  };

  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-4">
                {getIcon(stat.icon)}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;