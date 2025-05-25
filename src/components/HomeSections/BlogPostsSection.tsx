
import React from 'react';
import BlogCard from '@/components/BlogCard';
import { useNavigate } from 'react-router-dom';

// Import the news articles from the New page
import { newsArticles } from '@/data/newsData';

const BlogPostsSection = () => {
  const navigate = useNavigate();
  
  // Take only the first 3 articles for display
  const latestArticles = newsArticles.slice(0, 3);
  
  const handleReadMore = (id: number) => {
    navigate(`/news/${id}`);
  };
  
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Blog mới nhất</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestArticles.map((article) => (
          <BlogCard 
            key={article.id}
            title={article.title}
            date={article.date}
            image={article.image}
            excerpt={article.excerpt}
            onReadMore={() => handleReadMore(article.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostsSection;
