export interface Product {
  id: string;
  name: string;
  category: 'inverter-battery' | 'automobile-battery' | 'inverter' | 'solar-panel' | 'accessory';
  brand: string;
  type?: string;
  capacity?: string;
  warranty?: string;
  price: number;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image?: string;
  text: string;
  rating: number;
}

export interface ServiceType {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  address: string;
  serviceType: string;
  date: string;
  timeSlot: string;
  notes?: string;
}

export interface CalculatorFormData {
  fans: number;
  lights: number;
  tv: number;
  refrigerator: number;
  router: number;
  other: number;
}

export interface CalculatorResult {
  totalPower: number;
  requiredVA: number;
  recommendedProducts: string[];
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}