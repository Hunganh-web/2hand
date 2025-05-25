
import React from 'react';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample recommended products with quality
const recommendedProducts = [
  {
    id: 2,
    name: 'DJI Phantom 4',
    price: 29990000,
    image: '/2hand/lovable-uploads/38d25bd6-cc8f-403e-b81a-a1051b83b955.png',
    rating: 4,
    brand: 'DJI',
    quality: 95
  },
  {
    id: 5,
    name: 'DJI Mavic Pro',
    price: 27990000,
    image: '/2hand/lovable-uploads/04a5b206-ad47-4407-ae4d-2653618e34bb.png',
    rating: 5,
    brand: 'DJI',
    quality: 99
  },
  {
    id: 11,
    name: 'JBL E55BT',
    price: 2990000,
    image: '/2hand/lovable-uploads/e463cb7f-b52b-4645-b42e-e1f832c2fa11.png',
    rating: 4,
    brand: 'JBL',
    quality: 98
  },
  {
    id: 18,
    name: 'Samsung Galaxy Buds',
    price: 3290000,
    image: '/2hand/lovable-uploads/d56adc17-fcc8-413e-8528-fa5c800a1de4.png',
    rating: 4,
    brand: 'Samsung',
    quality: 96
  },
  {
    id: 13,
    name: 'Sony Alpha a7 II',
    price: 39990000,
    image: '/2hand/lovable-uploads/021a8019-0d40-4c19-9732-eab864ba42d3.png',
    rating: 5,
    brand: 'Sony',
    quality: 95
  },
  {
    id: 19,
    name: 'Xiaomi Mi Neckband Bluetooth Earphones',
    price: 890000,
    image: '/2hand/lovable-uploads/782bc093-aa57-4f03-b42a-001feceed330.png',
    rating: 4,
    brand: 'Xiaomi',
    quality: 93
  }
];

const RecommendedProductsSection = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">Đề xuất cho bạn</h2>
        <Link to="/products">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Button>
        </Link>
      </div>
      <ProductGrid 
        products={recommendedProducts} 
        carousel={true} 
        carouselItems={{
          default: 2,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5
        }} 
        mobile2x2={true}
      />
    </div>
  );
};

export default RecommendedProductsSection;
