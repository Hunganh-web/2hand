
import React from 'react';
import CategoryIcon from '@/components/CategoryIcon';
import { Smartphone, Headphones, Watch, Monitor, Camera, Tv, Laptop, Gamepad, Speaker } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryIconsSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category.toLowerCase()}`);
  };

  const categories = [
    { name: "Điện thoại", icon: <Smartphone className="h-6 w-6" />, category: "smartphone" },
    { name: "Máy ảnh", icon: <Camera className="h-6 w-6" />, category: "cameras" },
    { name: "Tivi", icon: <Tv className="h-6 w-6" />, category: "tv" },
    { name: "Máy tính", icon: <Laptop className="h-6 w-6" />, category: "laptop" },
    { name: "Tai nghe", icon: <Headphones className="h-6 w-6" />, category: "headphones" },
    { name: "Gaming", icon: <Gamepad className="h-6 w-6" />, category: "gaming" },
    { name: "Đồng hồ", icon: <Watch className="h-6 w-6" />, category: "watch" },
    { name: "Màn hình", icon: <Monitor className="h-6 w-6" />, category: "monitor" },
    { name: "Loa", icon: <Speaker className="h-6 w-6" />, category: "speakers" },
    { name: "Phụ kiện", icon: <Smartphone className="h-6 w-6" />, category: "accessories" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Danh mục sản phẩm</h2>
      {/* Mobile: 2 columns x 5 rows, Desktop: 5 columns x 2 rows */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 justify-items-center">
        {categories.map((cat, index) => (
          <div key={index} onClick={() => handleCategoryClick(cat.category)} className="cursor-pointer w-full">
            <CategoryIcon icon={cat.icon} name={cat.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIconsSection;
