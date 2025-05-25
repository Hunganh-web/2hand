
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  brand: string;
  inStock: boolean;
  originalPrice?: number;
  isUsed?: boolean;
}

// All products data
export const products: Product[] = [
  // Page 1
  // Máy bay không người lái
  {
    id: 1,
    name: 'DJI Phantom 4 Pro',
    price: 34990000,
    image: '/2hand/lovable-uploads/b3779d48-b0e8-42aa-a80e-51fc7ff3c1f7.png',
    category: 'máy bay không người lái',
    rating: 5,
    brand: 'DJI',
    inStock: true
  },
  {
    id: 2,
    name: 'DJI Phantom 4',
    price: 29990000,
    image: '/2hand/lovable-uploads/38d25bd6-cc8f-403e-b81a-a1051b83b955.png',
    category: 'máy bay không người lái',
    rating: 4,
    brand: 'DJI',
    inStock: true,
    isUsed: true
  },
  {
    id: 3,
    name: 'DJI Standard Edition',
    price: 22990000,
    image: '/2hand/lovable-uploads/60c71281-fae2-4158-841f-a665a6ae7471.png',
    category: 'máy bay không người lái',
    rating: 4,
    brand: 'DJI',
    inStock: true
  },
  {
    id: 4,
    name: 'DJI Phantom Pro Gold',
    price: 39990000,
    image: '/2hand/lovable-uploads/b8fe67f3-6dce-434e-83d9-45f36e6468ce.png',
    category: 'máy bay không người lái',
    rating: 5,
    brand: 'DJI',
    inStock: false
  },
  {
    id: 5,
    name: 'DJI Mavic Pro',
    price: 27990000,
    image: '/2hand/lovable-uploads/04a5b206-ad47-4407-ae4d-2653618e34bb.png',
    category: 'máy bay không người lái',
    rating: 5,
    brand: 'DJI',
    inStock: true
  },
  
  // Loa
  {
    id: 6,
    name: 'JBL Xtreme',
    price: 6990000,
    image: '/2hand/lovable-uploads/d66aa1b5-673c-4ddc-b4e5-ebf53f11238c.png',
    category: 'loa',
    rating: 4,
    brand: 'JBL',
    inStock: true
  },
  {
    id: 7,
    name: 'JBL Flip 4',
    price: 2990000,
    image: '/2hand/lovable-uploads/29bcdb08-f4e6-46f3-9f5c-3e52f8ac7e4f.png',
    category: 'loa',
    rating: 4,
    brand: 'JBL',
    inStock: true,
    isUsed: true
  },
  {
    id: 8,
    name: 'JBL Charge 3',
    price: 3490000,
    image: '/2hand/lovable-uploads/05bf989d-f163-4848-be81-8e8d4d77c5b2.png',
    category: 'loa',
    rating: 5,
    brand: 'JBL',
    inStock: true
  },
  {
    id: 9,
    name: 'Marshall Stanmore',
    price: 8490000,
    image: '/2hand/lovable-uploads/dbe0946c-c473-4b39-8a9a-2c086ce05a73.png',
    category: 'loa',
    rating: 5,
    brand: 'Marshall',
    inStock: false
  },
  
  // Tai nghe
  {
    id: 10,
    name: 'Apple AirPods',
    price: 3990000,
    image: '/2hand/lovable-uploads/b9c60d61-5e73-46b5-bb40-18ac0541d69b.png',
    category: 'headphones',
    rating: 5,
    brand: 'Apple',
    inStock: true
  },
  {
    id: 11,
    name: 'JBL E55BT',
    price: 2990000,
    image: '/2hand/lovable-uploads/e463cb7f-b52b-4645-b42e-e1f832c2fa11.png',
    category: 'headphones',
    rating: 4,
    brand: 'JBL',
    inStock: true,
    isUsed: true
  },
  
  // Máy ảnh
  {
    id: 12,
    name: 'Canon EOS 6D',
    price: 34990000,
    image: '/2hand/lovable-uploads/49109dc1-7a2c-4ede-8c80-88056d27723a.png',
    category: 'cameras',
    rating: 5,
    brand: 'Canon',
    inStock: true
  },
  {
    id: 13,
    name: 'Sony Alpha a7 II',
    price: 39990000,
    image: '/2hand/lovable-uploads/021a8019-0d40-4c19-9732-eab864ba42d3.png',
    category: 'cameras',
    rating: 5,
    brand: 'Sony',
    inStock: true,
    isUsed: true
  },
  {
    id: 14,
    name: 'Canon EOS 5D Mark II',
    price: 45990000,
    image: '/2hand/lovable-uploads/b93c8080-1704-4f23-a8ec-645725797989.png',
    category: 'cameras',
    rating: 5,
    brand: 'Canon',
    inStock: true
  },
  {
    id: 15,
    name: 'Canon 70-200mm Lens',
    price: 18990000,
    image: '/2hand/lovable-uploads/d4785c36-0cab-4183-9ac9-cd49093eb86c.png',
    category: 'ống kính',
    rating: 5,
    brand: 'Canon',
    inStock: true
  },
  {
    id: 16,
    name: 'Canon 24-70mm Lens',
    price: 14990000,
    image: '/2hand/lovable-uploads/d4785c36-0cab-4183-9ac9-cd49093eb86c.png',
    category: 'ống kính',
    rating: 5,
    brand: 'Canon',
    inStock: true
  },
  
  // Page 2 - New products from images
  {
    id: 17,
    name: 'Bose SoundSport Wireless Earbuds',
    price: 4990000,
    image: '/2hand/lovable-uploads/33eb2f2f-fac0-4d7d-92a1-d391631f68c6.png',
    category: 'headphones',
    rating: 5,
    brand: 'Bose',
    inStock: true
  },
  {
    id: 18,
    name: 'Samsung Galaxy Buds',
    price: 3290000,
    image: '/2hand/lovable-uploads/d56adc17-fcc8-413e-8528-fa5c800a1de4.png',
    category: 'headphones',
    rating: 4,
    brand: 'Samsung',
    inStock: true,
    isUsed: true
  },
  {
    id: 19,
    name: 'Xiaomi Mi Neckband Bluetooth Earphones',
    price: 890000,
    image: '/2hand/lovable-uploads/782bc093-aa57-4f03-b42a-001feceed330.png',
    category: 'headphones',
    rating: 4,
    brand: 'Xiaomi',
    inStock: true
  },
  {
    id: 20,
    name: 'Plantronics Voyager Legend Bluetooth Headset',
    price: 1890000,
    image: '/2hand/lovable-uploads/9bbd1a2b-f143-4490-abce-2829a1a98528.png',
    category: 'headphones',
    rating: 4,
    brand: 'Plantronics',
    inStock: true
  },
];

// Top selling products for homepage
export const topProducts: Product[] = [
  products[0], // DJI Phantom 4 Pro
  products[9], // Apple AirPods
  products[13], // Sony Alpha a7 II
  products[5], // JBL Xtreme
  products[14], // Canon EOS 5D Mark II
  products[16], // Bose SoundSport
];

// Recommended products for homepage
export const recommendedProducts: Product[] = [
  products[10], // JBL E55BT
  products[6], // JBL Flip 4
  products[17], // Samsung Galaxy Buds
  products[11], // Canon EOS 6D
  products[4], // DJI Mavic Pro
];
