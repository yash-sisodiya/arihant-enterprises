import React from 'react';
import { Shield, Award, Users, Map } from 'lucide-react';
import { testimonials } from '../data/services';
import { TEAM, CONTACT } from '../config/constants';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Card, CardContent } from './ui/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">About Arihant Enterprises</h1>
        <p className="text-gray-600 mb-8">
          Your trusted partner for power solutions in Rajsamand
        </p>

        {/* About Section */}
        <Card hover className="mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/6970073/pexels-photo-6970073.jpeg"
                alt="Arihant Enterprises Store"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Our Story</h2>
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
        </Card>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map(member => (
              <Card key={member.id} hover className="text-center p-6">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center gradient-text">What Our Customers Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        {/* Visit Our Store */}
        <Card hover>
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Visit Our Store</h2>
              <p className="text-gray-700 mb-6">
                We invite you to visit our store in Kankroli to explore our full range of products and speak with our experts in person.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Address:</h3>
                  <p className="text-gray-600">{CONTACT.address.full}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Contact:</h3>
                  <p className="text-gray-600">
                    Phone: <a href={`tel:+91${CONTACT.phone.primary}`} className="text-blue-600">{CONTACT.phone.primary}</a>
                    {" / "}
                    <a href={`tel:+91${CONTACT.phone.secondary}`} className="text-blue-600">{CONTACT.phone.secondary}</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Hours:</h3>
                  <p className="text-gray-600">
                    {CONTACT.workingHours.days}: {CONTACT.workingHours.time}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <iframe
                src={CONTACT.maps.embed}
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
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;