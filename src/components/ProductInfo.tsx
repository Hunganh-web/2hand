
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/productData';

interface ProductInfoProps {
  product: Product;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ 
  product, 
  onAddToCart, 
  onBuyNow 
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="md:w-1/2 p-8">
      <div className="mb-2">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </span>
      </div>
      
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
      
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {Array(5).fill(0).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${index < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="text-gray-600 text-sm">{product.rating} trên 5</span>
      </div>
      
      <div className="mb-4">
        <p className="text-xl font-bold text-gray-800">{formatCurrency(product.price)}</p>
        {product.originalPrice && (
          <p className="text-sm text-gray-500 line-through">{formatCurrency(product.originalPrice)}</p>
        )}
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Chi tiết sản phẩm:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><span className="font-medium">Thương hiệu:</span> {product.brand}</li>
          <li><span className="font-medium">Danh mục:</span> {product.category}</li>
          <li><span className="font-medium">Tình trạng:</span> {product.inStock ? 'Còn hàng' : 'Hết hàng'}</li>
        </ul>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          disabled={!product.inStock} 
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={onBuyNow}
        >
          Mua ngay
        </Button>
        <Button 
          disabled={!product.inStock} 
          variant="outline" 
          className="w-full flex items-center justify-center gap-1"
          onClick={onAddToCart}
        >
          <ShoppingCart className="h-4 w-4" /> Thêm vào giỏ
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
