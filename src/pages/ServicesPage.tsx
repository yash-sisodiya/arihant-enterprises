import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { services, timeSlots } from '../data/services';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const ServicesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    serviceType: services[0].id,
    date: '',
    timeSlot: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedService = services.find(s => s.id === formData.serviceType);
    const phoneNumber = '917728962090';
    
    let message = `Service Booking Request:\n\n`;
    message += `Service: ${selectedService?.name}\n`;
    message += `Date: ${formData.date}\n`;
    message += `Time: ${formData.timeSlot}\n\n`;
    message += `Customer Details:\n`;
    message += `Name: ${formData.name}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Address: ${formData.address}\n`;
    
    if (formData.notes) {
      message += `\nAdditional Notes: ${formData.notes}`;
    }
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      address: '',
      serviceType: services[0].id,
      date: '',
      timeSlot: '',
      notes: '',
    });
  };
  
  // Get tomorrow's date in YYYY-MM-DD format for min date in date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Our Services</h1>
        <p className="text-gray-600 mb-8">
          Professional battery and inverter services by certified technicians
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map(service => {
            const Icon = (() => {
              switch (service.icon) {
                case 'Stethoscope':
                  return <span className="text-2xl">🔍</span>;
                case 'Droplets':
                  return <span className="text-2xl">💧</span>;
                case 'Wrench':
                  return <span className="text-2xl">🔧</span>;
                case 'Tool':
                  return <span className="text-2xl">🛠️</span>;
                default:
                  return <span className="text-2xl">⚙️</span>;
              }
            })();

            return (
              <Card key={service.id}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                      {Icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Booking Form */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 bg-blue-600 text-white">
            <h2 className="text-2xl font-bold">Book a Service</h2>
            <p>Schedule a service visit at your convenient time</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter your complete address"
                />
              </div>
              
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md"
                >
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    min={tomorrowFormatted}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-10 border rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time Slot *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    required
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    className="w-full p-3 pl-10 border rounded-md"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded-md"
                  placeholder="Any specific requirements or details about your service needs"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                fullWidth
              >
                Book Service
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                * We'll confirm your booking via WhatsApp or phone call
              </p>
            </div>
          </form>
        </div>

        {/* Service Process */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Our Service Process</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">Book Online</h3>
                <p className="text-sm text-gray-600">
                  Fill the form with your details and preferred time slot
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">Confirmation</h3>
                <p className="text-sm text-gray-600">
                  We'll confirm your booking via WhatsApp or call
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">Service Visit</h3>
                <p className="text-sm text-gray-600">
                  Our technician visits your location at the scheduled time
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-3">
                  4
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-gray-600">
                  Continuous post-service support and warranty
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;