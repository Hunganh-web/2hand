
import React from 'react';
import ProductCard from './ProductCard';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  originalPrice?: number;
  brand?: string;
  soldOut?: boolean;
  color?: string;
}

interface CarouselItems {
  default: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface ProductGridProps {
  products: Product[];
  carousel?: boolean;
  carouselItems?: number | CarouselItems;
  showPagination?: boolean;
  mobile2x2?: boolean; // New prop for 2x2 mobile layout
}

const getBreakpoints = (carouselItems: number | CarouselItems) => {
  if (typeof carouselItems === 'number') {
    return {
      '(min-width: 768px)': {
        slides: { perView: carouselItems }
      }
    };
  }

  // Default values
  const items = {
    '(min-width: 0px)': {
      slides: { perView: carouselItems.default || 1 }
    }
  };

  // Add breakpoints if provided
  if (carouselItems.sm) {
    items['(min-width: 640px)'] = {
      slides: { perView: carouselItems.sm }
    };
  }
  
  if (carouselItems.md) {
    items['(min-width: 768px)'] = {
      slides: { perView: carouselItems.md }
    };
  }
  
  if (carouselItems.lg) {
    items['(min-width: 1024px)'] = {
      slides: { perView: carouselItems.lg }
    };
  }
  
  if (carouselItems.xl) {
    items['(min-width: 1280px)'] = {
      slides: { perView: carouselItems.xl }
    };
  }

  return items;
};

// Helper function to group products for 2x2 layout
const groupProductsForMobile = (products: Product[]) => {
  const groups = [];
  for (let i = 0; i < products.length; i += 4) {
    groups.push(products.slice(i, i + 4));
  }
  return groups;
};

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  carousel = false, 
  carouselItems = 4,
  showPagination = false,
  mobile2x2 = false
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: getBreakpoints(carouselItems),
    slides: { 
      perView: typeof carouselItems === 'number' ? 1 : carouselItems.default, 
      spacing: 16 
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Keen slider for 2x2 mobile layout
  const [mobile2x2SliderRef, mobile2x2InstanceRef] = useKeenSlider({
    slides: { 
      perView: 1, 
      spacing: 16 
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: typeof carouselItems === 'number' ? carouselItems : carouselItems.md || 3 }
      }
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handlePrevSlide = () => {
    if (mobile2x2) {
      mobile2x2InstanceRef.current?.prev();
    } else {
      instanceRef.current?.prev();
    }
  };

  const handleNextSlide = () => {
    if (mobile2x2) {
      mobile2x2InstanceRef.current?.next();
    } else {
      instanceRef.current?.next();
    }
  };

  // Function to get the calculated perView value
  const getPerViewValue = (): number => {
    const instance = mobile2x2 ? mobile2x2InstanceRef.current : instanceRef.current;
    if (
      !instance || 
      !instance.options.slides || 
      typeof instance.options.slides === 'number'
    ) {
      return 1;
    }
    
    if (typeof instance.options.slides === 'object' && 
        'perView' in instance.options.slides) {
      const perView = instance.options.slides.perView;
      return typeof perView === 'number' ? perView : 1;
    }
    
    return 1;
  };

  if (carousel && mobile2x2) {
    const productGroups = groupProductsForMobile(products);
    
    return (
      <div className="relative">
        {/* Mobile 2x2 Layout */}
        <div className="block md:hidden">
          <div ref={mobile2x2SliderRef} className="keen-slider">
            {productGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="keen-slider__slide">
                <div className="grid grid-cols-2 gap-2">
                  {group.map((product) => (
                    <div key={product.id}>
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div ref={sliderRef} className="keen-slider">
            {products.map((product) => (
              <div key={product.id} className="keen-slider__slide p-1">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
        
        {loaded && (mobile2x2 ? mobile2x2InstanceRef.current : instanceRef.current) && showPagination && (
          <div className="flex items-center justify-center mt-6 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              className="rounded-full w-8 h-8 p-0"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-1">
              {mobile2x2 ? (
                [...Array(productGroups.length).keys()].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      mobile2x2InstanceRef.current?.moveToIdx(idx);
                    }}
                    className={`w-2 h-2 rounded-full ${currentSlide === idx ? "bg-blue-600" : "bg-gray-300"}`}
                  ></button>
                ))
              ) : (
                [...Array((instanceRef.current?.track.details.slides.length || 0) - getPerViewValue() + 1).keys()].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`w-2 h-2 rounded-full ${currentSlide === idx ? "bg-blue-600" : "bg-gray-300"}`}
                  ></button>
                ))
              )}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNextSlide}
              disabled={
                mobile2x2 ? 
                currentSlide === productGroups.length - 1 :
                currentSlide === 
                (instanceRef.current?.track.details.slides.length || 0) - getPerViewValue()
              }
              className="rounded-full w-8 h-8 p-0"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  if (carousel) {
    return (
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            <div key={product.id} className="keen-slider__slide p-1">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        {loaded && instanceRef.current && showPagination && (
          <div className="flex items-center justify-center mt-6 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              className="rounded-full w-8 h-8 p-0"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-1">
              {[...Array(instanceRef.current.track.details.slides.length - getPerViewValue() + 1).keys()].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-2 h-2 rounded-full ${currentSlide === idx ? "bg-blue-600" : "bg-gray-300"}`}
                ></button>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNextSlide}
              disabled={
                currentSlide === 
                instanceRef.current.track.details.slides.length - getPerViewValue()
              }
              className="rounded-full w-8 h-8 p-0"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
