
import React from 'react';
import { Button } from './ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Badge } from './ui/badge';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  originalPrice?: number;
  brand?: string;
  soldOut?: boolean;
  color?: string;
  isUsed?: boolean;
  quality?: number; // Add quality percentage
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id,
  name, 
  price, 
  image, 
  rating, 
  originalPrice, 
  brand = 'Vexel', 
  soldOut = false,
  color = 'Mặc định',
  isUsed = false,
  quality = 100
}) => {
  const navigate = useNavigate();
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(value);
  };

  const getQualityBadge = () => {
    if (quality === 100) {
      return { color: 'bg-green-500', text: '100%' };
    } else if (quality >= 95) {
      return { color: 'bg-yellow-500', text: `${quality}%` };
    } else {
      return { color: 'bg-red-500', text: `${quality}%` };
    }
  };

  const qualityBadge = getQualityBadge();

  const handleAddToCart = () => {
    if (!soldOut) {
      // Add to cart logic
      // Get existing cart or initialize empty array
      const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === id);
      
      if (existingItemIndex >= 0) {
        cartItems[existingItemIndex].quantity += 1;
      } else {
        cartItems.push({
          id,
          name,
          price,
          image,
          brand,
          color,
          quantity: 1
        });
      }
      
      localStorage.setItem('cart', JSON.stringify(cartItems));
      window.dispatchEvent(new Event('cartUpdated'));
      
      toast({
        title: "Thêm vào giỏ hàng thành công",
        description: `${name} đã được thêm vào giỏ hàng của bạn.`,
      });
    }
  };

  const handleBuyNow = () => {
    if (!soldOut) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border product-card-hover h-full flex flex-col">
      <Link to={`/product/${id}`} className="flex-shrink-0">
        <div className="relative">
          <div className="h-40 flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-gray-100">
            <img src={image} alt={name} className="max-h-full object-contain" />
          </div>
          
          {/* Quality Badge - Top Right */}
          <Badge 
            variant="secondary" 
            className={`absolute top-2 right-2 ${qualityBadge.color} text-white border-0 text-xs font-semibold px-2 py-1`}
          >
            {qualityBadge.text}
          </Badge>

          {soldOut && (
            <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
              Hết hàng
            </span>
          )}
          {isUsed && (
            <Badge variant="secondary" className="absolute bottom-2 right-2 bg-amber-500 text-white border-0">
              Hàng cũ
            </Badge>
          )}
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-1">
          <p className="text-xs text-gray-500">{brand}</p>
        </div>
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-10 hover:text-blue-600 transition-colors">{name}</h3>
        </Link>
        <div className="flex items-center mt-2 mb-1">
          {Array(5).fill(0).map((_, index) => (
            <Star
              key={index}
              className={`h-3 w-3 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className="mt-2">
          <p className="font-semibold text-gray-900">{formatCurrency(price)}</p>
          {originalPrice && (
            <p className="text-xs text-gray-500 line-through">{formatCurrency(originalPrice)}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-auto pt-3">
          <Button 
            disabled={soldOut} 
            size="sm" 
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={handleBuyNow}
          >
            Xem ngay
          </Button>
          <Button 
            disabled={soldOut} 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center gap-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-3.5 w-3.5" /> Thêm vào giỏ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
