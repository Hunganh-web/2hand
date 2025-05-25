
import React from 'react';
import FeaturedBanner from '@/components/FeaturedBanner';
import { Link } from 'react-router-dom';

interface FeaturedBannerSectionProps {
  title: string;
  description: string;
  image: string;
  bgClass: string;
}

const FeaturedBannerSection: React.FC<FeaturedBannerSectionProps> = ({ title, description, image, bgClass }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <Link to="/products">
        <FeaturedBanner 
          title={title}
          description={description}
          image={image}
          bgClass={bgClass}
        />
      </Link>
    </div>
  );
};

export default FeaturedBannerSection;
