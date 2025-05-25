
import React from 'react';
import ProductCategory from '@/components/ProductCategory';
import { useNavigate } from 'react-router-dom';

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category.toLowerCase()}`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div onClick={() => handleCategoryClick('headphones')} className="cursor-pointer">
          <ProductCategory 
            title="TAI NGHE"
            startingPrice={699000}
            image="/2hand/lovable-uploads/b9c60d61-5e73-46b5-bb40-18ac0541d69b.png"
            bgClass="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300"
          />
        </div>
        <div onClick={() => handleCategoryClick('watch')} className="cursor-pointer">
          <ProductCategory 
            title="ĐỒNG HỒ THÔNG MINH"
            startingPrice={999000}
            image="/2hand/lovable-uploads/33eb2f2f-fac0-4d7d-92a1-d391631f68c6.png"
            bgClass="bg-gradient-to-br from-orange-200 via-pink-200 to-purple-300"
          />
        </div>
        <div onClick={() => handleCategoryClick('cameras')} className="cursor-pointer">
          <ProductCategory 
            title="MÁY ẢNH"
            startingPrice={34990000}
            image="/2hand/lovable-uploads/49109dc1-7a2c-4ede-8c80-88056d27723a.png"
            bgClass="bg-gradient-to-br from-blue-200 via-green-200 to-yellow-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
