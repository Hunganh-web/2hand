
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    title: 'Sản phẩm công nghệ mới nhất',
    description: 'Khám phá những thiết bị điện tử công nghệ tiên tiến với chất lượng cao và giá cả phải chăng',
    image: '/2hand/lovable-uploads/b3779d48-b0e8-42aa-a80e-51fc7ff3c1f7.png',
    bgClass: 'bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300',
    link: '/products',
  },
  {
    id: 2,
    title: 'Tai nghe không dây chất lượng cao',
    description: 'Trải nghiệm âm thanh tuyệt vời với bộ sưu tập tai nghe không dây mới nhất',
    image: '/2hand/lovable-uploads/b9c60d61-5e73-46b5-bb40-18ac0541d69b.png',
    bgClass: 'bg-gradient-to-br from-orange-200 via-pink-200 to-purple-300',
    link: '/products?category=headphones',
  },
  {
    id: 3,
    title: 'Máy ảnh chuyên nghiệp',
    description: 'Bắt trọn khoảnh khắc với độ phân giải cao và tính năng chuyên nghiệp',
    image: '/2hand/lovable-uploads/49109dc1-7a2c-4ede-8c80-88056d27723a.png',
    bgClass: 'bg-gradient-to-br from-blue-200 via-green-200 to-yellow-300',
    link: '/products?category=cameras',
  }
];

const HeroCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="w-full">
      <Carousel 
        className="w-full"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className={`${slide.bgClass} w-full py-10 md:py-16 min-h-[400px] md:min-h-[450px] flex items-center`}>
                <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full">
                    <div className="fade-in">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-gray-600 mb-6 max-w-md">
                        {slide.description}
                      </p>
                      <Link to={slide.link}>
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                          Xem thêm <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="flex justify-center md:justify-end">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="max-h-[300px] object-contain drop-shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-4 top-1/2" />
          <CarouselNext className="absolute right-4 top-1/2" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
