
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCategoryProps {
  title: string;
  startingPrice: number;
  image: string;
  bgClass: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ title, startingPrice, image, bgClass }) => {
  return (
    <div className={`${bgClass} rounded-xl overflow-hidden shadow-sm h-[200px]`}>
      <div className="p-6 flex flex-row justify-between items-center h-full">
        <div className="flex flex-col justify-center flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">Từ {startingPrice.toLocaleString('vi-VN')}đ</p>
          <Button variant="outline" size="sm" className="self-start flex items-center gap-1 bg-white/80 hover:bg-white border-gray-300 text-gray-700 hover:text-gray-900">
            Xem ngay <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
        <div className="flex items-center justify-end flex-1">
          <img src={image} alt={title} className="max-h-[120px] max-w-[120px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
