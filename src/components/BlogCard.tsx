
import React from 'react';
import { Button } from './ui/button';

interface BlogCardProps {
  title: string;
  image: string;
  date: string;
  excerpt: string;
  onReadMore?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, date, excerpt, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border group hover:shadow-md transition-shadow">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform group-hover:scale-105 duration-300" 
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-gray-500 mb-2 block">{date}</span>
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{excerpt}</p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onReadMore}
          className="hover:bg-blue-50 transition-colors"
        >
          Đọc thêm
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
