import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'inv-bat-1',
    name: 'Exide Inva Master IMTT1500 150Ah Tall Tubular Battery',
    category: 'inverter-battery',
    brand: 'Exide',
    type: 'Tubular',
    capacity: '150Ah',
    warranty: '36+12 months',
    price: 15500,
    description: 'The Exide Inva Master IMTT1500 is a high-performance tubular battery designed for long backup times and durability in conditions with frequent power cuts.',
    specifications: {
      'Battery Type': 'Tall Tubular',
      'Capacity': '150Ah',
      'Warranty': '36 months warranty + 12 months pro-rata',
      'Dimensions': '502 x 189 x 413 mm',
      'Weight': '57 kg (approx)',
      'Container': 'Polypropylene',
      'Water Level Indicator': 'Yes',
    },
    images: [
      'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg',
      'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg',
    ],
    featured: true,
  },
  {
    id: 'inv-bat-2',
    name: 'Luminous RC 25000 200Ah Tubular Battery',
    category: 'inverter-battery',
    brand: 'Luminous',
    type: 'Tubular',
    capacity: '200Ah',
    warranty: '36+24 months',
    price: 19800,
    description: 'The Luminous RC 25000 is a high-capacity tubular battery designed for homes and offices that require extended power backup.',
    specifications: {
      'Battery Type': 'Tall Tubular',
      'Capacity': '200Ah',
      'Warranty': '36 months warranty + 24 months pro-rata',
      'Dimensions': '502 x 191 x 432 mm',
      'Weight': '62 kg (approx)',
      'Container': 'Polypropylene',
      'Water Level Indicator': 'Yes',
    },
    images: [
      'https://images.pexels.com/photos/6970071/pexels-photo-6970071.jpeg',
      'https://images.pexels.com/photos/6970072/pexels-photo-6970072.jpeg',
    ],
  },
  {
    id: 'auto-bat-1',
    name: 'Amaron FLO 35Ah Car Battery',
    category: 'automobile-battery',
    brand: 'Amaron',
    type: 'SMF',
    capacity: '35Ah',
    warranty: '36 months',
    price: 5200,
    description: 'Amaron FLO 35Ah battery is a maintenance-free battery for small to medium cars, providing reliable starting power in all conditions.',
    specifications: {
      'Battery Type': 'SMF (Sealed Maintenance Free)',
      'Capacity': '35Ah',
      'Warranty': '36 months',
      'CCA': '330A',
      'Terminal Layout': 'Right Hand Positive',
      'Dimensions': '197 x 129 x 227 mm',
      'Weight': '9.5 kg (approx)',
    },
    images: [
      'https://images.pexels.com/photos/13451608/pexels-photo-13451608.jpeg',
      'https://images.pexels.com/photos/13451605/pexels-photo-13451605.jpeg',
    ],
  },
  {
    id: 'inverter-1',
    name: 'Luminous Zelio+ 1100 Pure Sine Wave Inverter',
    category: 'inverter',
    brand: 'Luminous',
    type: 'Pure Sine Wave',
    capacity: '900VA',
    warranty: '24 months',
    price: 7500,
    description: 'The Luminous Zelio+ 1100 is a pure sine wave inverter that provides clean power for sensitive electronics and appliances during power outages.',
    specifications: {
      'Inverter Type': 'Pure Sine Wave',
      'Capacity': '900VA',
      'Warranty': '24 months',
      'Input Voltage Range': '100V - 290V AC',
      'Output Voltage': '220V ± 8%',
      'Efficiency': '>80%',
      'Recommended Battery': '120-150Ah Tubular',
      'Dimensions': '351 x 231 x 116 mm',
      'Weight': '7.2 kg',
    },
    images: [
      'https://images.pexels.com/photos/6979455/pexels-photo-6979455.jpeg',
      'https://images.pexels.com/photos/6979452/pexels-photo-6979452.jpeg',
    ],
    featured: true,
  },
  {
    id: 'solar-1',
    name: 'Luminous 440W Mono PERC Solar Panel',
    category: 'solar-panel',
    brand: 'Luminous',
    type: 'Monocrystalline PERC',
    capacity: '440W',
    warranty: '25 years',
    price: 18000,
    description: 'High-efficiency 440W Mono PERC solar panel with 25 years performance warranty, ideal for residential rooftop solar installations.',
    specifications: {
      'Panel Type': 'Monocrystalline PERC',
      'Capacity': '440W',
      'Warranty': '25 years performance, 10 years product',
      'Efficiency': '20.3%',
      'Operating Temperature': '-40°C to +85°C',
      'Dimensions': '2094 x 1038 x 35 mm',
      'Weight': '23 kg',
    },
    images: [
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
      'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
    ],
  },
  {
    id: 'acc-1',
    name: 'Digital Battery Hydrometer',
    category: 'accessory',
    brand: 'Generic',
    price: 850,
    description: 'Digital battery hydrometer for accurate measurement of battery electrolyte specific gravity and battery health assessment.',
    specifications: {
      'Type': 'Digital Hydrometer',
      'Range': '1.000 to 1.300 specific gravity',
      'Accuracy': '±0.005',
      'Display': 'LCD',
      'Power': '2 x AAA Batteries',
    },
    images: [
      'https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg',
    ],
  },
];

export const featuredProducts = products.filter(product => product.featured);

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand: string) => {
  return products.filter(product => product.brand === brand);
};

export const getBrands = (): string[] => {
  return [...new Set(products.map(product => product.brand))];
};

export const getCategories = (): { id: Product['category']; name: string; icon: string }[] => {
  return [
    { id: 'inverter-battery', name: 'Inverter Batteries', icon: 'Battery' },
    { id: 'automobile-battery', name: 'Automobile Batteries', icon: 'Car' },
    { id: 'inverter', name: 'Inverters', icon: 'ZapOff' },
    { id: 'solar-panel', name: 'Solar Panels', icon: 'Sun' },
    { id: 'accessory', name: 'Accessories', icon: 'Package' },
  ];
};