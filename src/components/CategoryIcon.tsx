
import React from 'react';

interface CategoryIconProps {
  icon: React.ReactNode;
  name: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center category-icon group">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 transition-all group-hover:bg-blue-100 group-hover:scale-110">
        <div className="text-gray-700 group-hover:text-blue-600 transition-colors">
          {icon}
        </div>
      </div>
      <span className="text-xs text-gray-700 group-hover:text-blue-600 transition-colors">{name}</span>
    </div>
  );
};

export default CategoryIcon;
