
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';
import { Link } from 'react-router-dom';

// Sample products with quality
const topProducts = [
  {
    id: 1,
    name: 'DJI Phantom 4 Pro',
    price: 34990000,
    image: '/2hand/lovable-uploads/b3779d48-b0e8-42aa-a80e-51fc7ff3c1f7.png',
    rating: 5,
    brand: 'DJI',
    quality: 100
  },
  {
    id: 6,
    name: 'JBL Xtreme',
    price: 6990000,
    image: '/2hand/lovable-uploads/d66aa1b5-673c-4ddc-b4e5-ebf53f11238c.png',
    rating: 4,
    brand: 'JBL',
    quality: 95
  },
  {
    id: 10,
    name: 'Apple AirPods',
    price: 3990000,
    image: '/2hand/lovable-uploads/b9c60d61-5e73-46b5-bb40-18ac0541d69b.png',
    rating: 5,
    brand: 'Apple',
    quality: 100
  },
  {
    id: 12,
    name: 'Canon EOS 6D',
    price: 34990000,
    image: '/2hand/lovable-uploads/49109dc1-7a2c-4ede-8c80-88056d27723a.png',
    rating: 5,
    brand: 'Canon',
    quality: 97
  },
  {
    id: 17,
    name: 'Bose SoundSport Wireless Earbuds',
    price: 4990000,
    image: '/2hand/lovable-uploads/33eb2f2f-fac0-4d7d-92a1-d391631f68c6.png',
    rating: 5,
    brand: 'Bose',
    quality: 100
  },
  {
    id: 8,
    name: 'JBL Charge 3',
    price: 3490000,
    image: '/2hand/lovable-uploads/05bf989d-f163-4848-be81-8e8d4d77c5b2.png',
    rating: 5,
    brand: 'JBL',
    quality: 92
  }
];

const TopSellingSection = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Sản phẩm bán chạy</h2>
        <Link to="/products">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            Xem tất cả <ArrowRight className="h-3 w-3" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Featured Product */}
        <div className="md:col-span-1 bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 relative overflow-hidden">
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-800">Máy ảnh Canon EOS 5D Mark II</h3>
            <p className="text-sm text-gray-600 mt-2">Chỉ từ: {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
              maximumFractionDigits: 0
            }).format(45990000)}</p>
            <Link to="/products?category=cameras">
              <Button className="mt-4 bg-gray-900 hover:bg-gray-800 flex items-center gap-1">
                Mua ngay <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              src="/2hand/lovable-uploads/b93c8080-1704-4f23-a8ec-645725797989.png" 
              alt="Featured Camera" 
              className="max-h-[180px] object-contain absolute bottom-0 right-0"
            />
          </div>
        </div>
        
        {/* Regular Products Grid */}
        <div className="md:col-span-3">
          <ProductGrid 
            products={topProducts} 
            carousel={true} 
            carouselItems={{ 
              default: 2,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3
            }}
            showPagination={true}
            mobile2x2={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TopSellingSection;
