
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoriesSection from '@/components/HomeSections/CategoriesSection';
import TopSellingSection from '@/components/HomeSections/TopSellingSection';
import FeaturedBannerSection from '@/components/HomeSections/FeaturedBannerSection';
import CategoryIconsSection from '@/components/HomeSections/CategoryIconsSection';
import RecommendedProductsSection from '@/components/HomeSections/RecommendedProductsSection';
import TestimonialsSection from '@/components/HomeSections/TestimonialsSection';
import BlogPostsSection from '@/components/HomeSections/BlogPostsSection';
import FeaturesSection from '@/components/HomeSections/FeaturesSection';
import HeroCarousel from '@/components/HomeSections/HeroCarousel';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Carousel Section */}
      <HeroCarousel />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Best Selling Products */}
      <TopSellingSection />
      
      {/* Featured Banner - Laptop */}
      <FeaturedBannerSection 
        title="Laptop Gaming ASUS ROG Strix G16"
        description="Hiệu năng mạnh mẽ với chip Intel Core i9, card đồ họa RTX 4070 và màn hình 16 inch 165Hz"
        image="/2hand/lovable-uploads/b93c8080-1704-4f23-a8ec-645725797989.png"
        bgClass="orange-pink-gradient"
      />
      
      {/* Product Categories Icons */}
      <CategoryIconsSection />
      
      {/* PlayStation Banner */}
      <FeaturedBannerSection 
        title="Máy chơi game PlayStation 5 Digital Edition"
        description="Trải nghiệm chơi game thế hệ mới với bộ xử lý siêu nhanh và đồ họa tuyệt đẹp"
        image="/2hand/lovable-uploads/d66aa1b5-673c-4ddc-b4e5-ebf53f11238c.png"
        bgClass="blue-purple-gradient"
      />
      
      {/* Recommended Products */}
      <RecommendedProductsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Blog Posts */}
      <BlogPostsSection />
      
      {/* Features */}
      <FeaturesSection />
      
      <Footer />
    </div>
  );
};

export default Index;
