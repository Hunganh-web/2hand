
import React from 'react';
import { Button } from './ui/button';

interface FeaturedBannerProps {
  title: string;
  description: string;
  image: string;
  bgClass: string;
}

const FeaturedBanner: React.FC<FeaturedBannerProps> = ({ title, description, image, bgClass }) => {
  return (
    <div className={`${bgClass} rounded-xl overflow-hidden p-6 md:p-8`}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{title}</h2>
          <p className="text-sm text-gray-700 mb-5">{description}</p>
          <Button className="bg-gray-900 hover:bg-black text-white">Xem ngay</Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={image} alt={title} className="max-h-[200px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
