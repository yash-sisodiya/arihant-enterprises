import React from 'react';
import { Shield, Award, Users, Map } from 'lucide-react';
import { testimonials } from '../data/services';
import TestimonialCarousel from '../components/TestimonialCarousel';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">About Arihant Enterprises</h1>
        <p className="text-gray-600 mb-8">
          Your trusted partner for power solutions in Rajsamand
        </p>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6970073/pexels-photo-6970073.jpeg"
                alt="Arihant Enterprises Store"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Established in 2012, Arihant Enterprises has been serving the Rajsamand region with quality power solutions for over a decade. What started as a small battery shop has grown into a comprehensive power solution provider trusted by thousands of customers.
              </p>
              <p className="text-gray-700 mb-4">
                We specialize in all types of batteries, inverters, solar solutions, and related services. Our team of experienced technicians ensures that customers receive the best products along with professional installation and maintenance services.
              </p>
              <p className="text-gray-700">
                At Arihant Enterprises, we believe in building long-term relationships with our customers through honest advice, quality products, and reliable after-sales service.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We only stock products from trusted brands with proper warranty and reliability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">
                Our certified technicians provide professional installation and maintenance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction with personalized solutions and support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Map className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Presence</h3>
              <p className="text-gray-600">
                Being locally based, we provide quick response and understand local needs.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
                    alt="Rajesh Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Rajesh Kumar</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                    alt="Sunil Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Sunil Sharma</h3>
                <p className="text-gray-600">Technical Head</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img
                    src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg"
                    alt="Priya Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Priya Patel</h3>
                <p className="text-gray-600">Customer Relations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Visit Our Store */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">Visit Our Store</h2>
              <p className="text-gray-700 mb-6">
                We invite you to visit our store in Kankroli to explore our full range of products and speak with our experts in person.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Address:</h3>
                  <p className="text-gray-600">
                    Surabhi Complex ke saamne, Jalchakki Road, Kankroli, Rajsamand (Rajasthan)
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Contact:</h3>
                  <p className="text-gray-600">
                    Phone: <a href="tel:+917728962090" className="text-blue-600">7728962090</a> / <a href="tel:+919784477456" className="text-blue-600">9784477456</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Hours:</h3>
                  <p className="text-gray-600">
                    Monday to Sunday: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8861998577575!2d73.71209091500949!3d24.93077998400993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968bb7d1a5c71c3%3A0xbde15ed6d48e8e3c!2sKankroli%2C%20Rajasthan%20313324!5e0!3m2!1sen!2sin!4v1653382901574!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arihant Enterprises Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;