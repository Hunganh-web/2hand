
import React, { useState } from 'react';

interface ProductImageGalleryProps {
  productImages: string[];
  productName: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ 
  productImages, 
  productName 
}) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="md:w-1/2 p-8 bg-white">
      <div className="flex flex-col items-center">
        {/* Main Image */}
        <div className="mb-4 h-64 flex items-center justify-center">
          <img 
            src={productImages[activeImage]} 
            alt={productName} 
            className="max-h-64 object-contain"
          />
        </div>
        
        {/* Thumbnail Images */}
        <div className="flex space-x-4 mt-4">
          {productImages.map((img, index) => (
            <div 
              key={index} 
              className={`w-16 h-16 border-2 rounded p-1 cursor-pointer ${activeImage === index ? 'border-blue-500' : 'border-gray-200'}`}
              onClick={() => setActiveImage(index)}
            >
              <img 
                src={img} 
                alt={`${productName} view ${index + 1}`} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
