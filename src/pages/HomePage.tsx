import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, PenTool as Tool, Calculator, ShoppingBag } from 'lucide-react';
import { featuredProducts } from '../data/products';
import { testimonials } from '../data/services';
import Button from '../components/ui/Button';
import ProductCard from '../components/ProductCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CategorySection from '../components/CategorySection';
import StatSection from '../components/StatSection';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/6970073/pexels-photo-6970073.jpeg)', 
          paddingTop: '80px' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Power Solutions for Every Need
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium batteries, inverters, and solar solutions with expert installation and service support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button variant="primary" size="lg" icon={<ShoppingBag className="h-5 w-5" />}>
                  Explore Products
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="lg" icon={<Tool className="h-5 w-5" />}>
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategorySection />

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Featured Products</h2>
          <p className="text-gray-600 text-center mb-8">Discover our most popular power solutions</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatSection />

      {/* Services Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
          <p className="text-gray-600 text-center mb-12">Professional support for all your power needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Battery & Inverter Services</h3>
              <p className="text-gray-600 mb-4">
                Complete health checks, water top-up, and repairs for all types of batteries and inverters.
              </p>
              <Link to="/services">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Installation Support</h3>
              <p className="text-gray-600 mb-4">
                Professional installation services for inverters, batteries, and solar panel systems.
              </p>
              <Link to="/services">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Battery Backup Calculator</h3>
              <p className="text-gray-600 mb-4">
                Find the perfect inverter and battery capacity based on your power needs.
              </p>
              <Link to="/calculator">
                <Button variant="outline">Use Calculator</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">What Our Customers Say</h2>
          <p className="text-gray-600 text-center mb-8">Trusted by thousands of customers across Rajsamand</p>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Power Problems?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us today for expert advice on the best battery, inverter, or solar solution for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;