// Contact Information
export const CONTACT = {
  phone: {
    primary: '7728962090',
    secondary: '9784477456',
    whatsapp: '917728962090'
  },
  email: 'contact@arihantenterprises.in',
  address: {
    full: 'Surabhi Complex ke saamne, Jalchakki Road, Kankroli, Rajsamand (Rajasthan)',
    street: 'Jalchakki Road',
    landmark: 'Surabhi Complex ke saamne',
    city: 'Kankroli',
    district: 'Rajsamand',
    state: 'Rajasthan',
    pincode: '313324'
  },
  workingHours: {
    days: 'Monday to Sunday',
    time: '9:00 AM - 8:00 PM'
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com'
  },
  maps: {
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8861998577575!2d73.71209091500949!3d24.93077998400993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968bb7d1a5c71c3%3A0xbde15ed6d48e8e3c!2sKankroli%2C%20Rajasthan%20313324!5e0!3m2!1sen!2sin!4v1653382901574!5m2!1sen!2sin'
  }
};

// Theme Configuration
export const THEME = {
  colors: {
    primary: {
      light: 'from-blue-500 to-blue-600',
      default: 'from-blue-600 to-blue-700',
      dark: 'from-blue-700 to-blue-800'
    },
    secondary: {
      light: 'from-orange-400 to-pink-400',
      default: 'from-orange-500 to-pink-500',
      dark: 'from-orange-600 to-pink-600'
    },
    accent: {
      light: 'from-purple-500 to-purple-600',
      default: 'from-purple-600 to-purple-700',
      dark: 'from-purple-700 to-purple-800'
    }
  },
  gradients: {
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-orange-500 to-pink-500',
    subtle: 'from-gray-50 via-blue-50/30 to-purple-50/30'
  },
  animations: {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    slideIn: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.4 }
    },
    scale: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.3 }
    }
  }
};

// Team Members
export const TEAM = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    bio: 'Leading the company with over 15 years of experience in the power solutions industry.'
  },
  {
    id: 2,
    name: 'Sunil Sharma',
    role: 'Technical Head',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    bio: 'Expert in battery technology and power systems with 10+ years of experience.'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Customer Relations',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
    bio: 'Ensuring excellent customer service and support for all our clients.'
  }
];

// Battery Calculator Constants
export const BATTERY_CAPACITIES = [150, 180, 200];

export const POWER_CONSUMPTION = {
  fans: 75,
  lights: 15,
  tv: 120,
  refrigerator: 150,
  router: 20,
  other: 100
};