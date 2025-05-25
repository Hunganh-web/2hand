
import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient w-full py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Xem thiết bị điện tử
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              Khám phá những thiết bị điện tử công nghệ mới nhất với chất lượng tốt nhất và giá cả phải chăng
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              Xem thêm <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTU0MDAxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
              alt="Latest mobile devices"
              className="max-h-[400px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
