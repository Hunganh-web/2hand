
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, image, text, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <div className="flex">
            {Array(5).fill(0).map((_, index) => (
              <Star
                key={index}
                className={`h-3 w-3 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
};

export default TestimonialCard;
