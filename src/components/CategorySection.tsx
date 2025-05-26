import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Car, ZapOff, Sun, Package } from 'lucide-react';
import { getCategories } from '../data/products';

const CategorySection: React.FC = () => {
  const categories = getCategories();
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Battery':
        return <Battery className="h-8 w-8" />;
      case 'Car':
        return <Car className="h-8 w-8" />;
      case 'ZapOff':
        return <ZapOff className="h-8 w-8" />;
      case 'Sun':
        return <Sun className="h-8 w-8" />;
      case 'Package':
        return <Package className="h-8 w-8" />;
      default:
        return <Package className="h-8 w-8" />;
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Product Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/products?category=${category.id}`}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4 text-blue-600">
                {getIcon(category.icon)}
              </div>
              <h3 className="font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;