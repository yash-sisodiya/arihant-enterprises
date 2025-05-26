import { ServiceType, Testimonial, Stat } from '../types';

export const services: ServiceType[] = [
  {
    id: 'health-check',
    name: 'Battery Health Check',
    description: 'Complete diagnosis including voltage testing, load testing, electrolyte level inspection, and water top-up service with distilled water.',
    icon: 'Stethoscope',
  },
  {
    id: 'installation',
    name: 'Installation Support',
    description: 'Expert installation of new batteries, inverters, or solar panels with proper configuration and testing.',
    icon: 'Wrench',
  },
  {
    id: 'repair',
    name: 'Repair Service',
    description: 'Complete battery and inverter repair services by certified technicians with genuine replacement parts.',
    icon: 'Tool',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    location: 'Kankroli',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'I was struggling with frequent power cuts in my area. The team at Arihant Enterprises recommended the perfect inverter and battery setup for my home. The installation was quick and professional.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sunita Patel',
    location: 'Rajsamand',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    text: 'Excellent service! My car battery died suddenly, and the team provided emergency replacement within 2 hours. The battery quality is excellent and the price was reasonable.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mohan Singh',
    location: 'Nathdwara',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    text: 'I got my solar panel system installed by Arihant Enterprises. The whole process from consultation to installation was smooth and professional. Now enjoying free electricity!',
    rating: 4,
  },
  {
    id: '4',
    name: 'Priya Verma',
    location: 'Rajsamand',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    text: 'Regular maintenance service for my inverter battery has been excellent. The technicians are knowledgeable and always on time. My battery has been performing well for 4 years now.',
    rating: 5,
  },
];

export const stats: Stat[] = [
  {
    value: '1500+',
    label: 'Happy Customers',
    icon: 'Users',
  },
  {
    value: '3000+',
    label: 'Installations',
    icon: 'Wrench',
  },
  {
    value: '10+',
    label: 'Years Experience',
    icon: 'Calendar',
  },
  {
    value: '5000+',
    label: 'Service Calls',
    icon: 'Phone',
  },
];

export const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM',
];

export const calculateBackup = (formData: {
  fans: number;
  lights: number;
  tv: number;
  refrigerator: number;
  router: number;
  other: number;
}, batteryAh: number = 150): { totalPower: number; requiredVA: number; batteryAh: number; backupHours: number } => {
  // Power consumption estimates (in Watts)
  const powerConsumption = {
    fans: 60,
    lights: 25,
    tv: 120,
    refrigerator: 150,
    router: 20,
    other: 100,
  };

  const totalPower =
    formData.fans * powerConsumption.fans +
    formData.lights * powerConsumption.lights +
    formData.tv * powerConsumption.tv +
    formData.refrigerator * powerConsumption.refrigerator +
    formData.router * powerConsumption.router +
    formData.other * powerConsumption.other;

  // Add 20% buffer for inverter efficiency
  const requiredVA = Math.ceil((totalPower * 1.2) / 100) * 100;
  
  // Calculate actual backup hours (with 20% reduction for real-world conditions)
  const backupHours = Math.round((batteryAh * 12 * 0.8) / totalPower * 10) / 10;

  return {
    totalPower,
    requiredVA,
    batteryAh,
    backupHours
  };
};