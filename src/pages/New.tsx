
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample news articles with updated images
const newsArticles = [
  {
    id: 1,
    title: 'Ra mắt tai nghe không dây mới với chức năng chống ồn chủ động',
    image: '/2hand/lovable-uploads/4954fec3-b8dd-4cca-b722-977e0d62b02e.png',
    date: '15/05/2023',
    excerpt: 'Khám phá dòng tai nghe cao cấp mới nhất của chúng tôi với công nghệ chống ồn hiện đại và thời lượng pin lên đến 40 giờ.'
  },
  {
    id: 2,
    title: 'Khuyến mãi đặc biệt: Giảm 20% toàn bộ sản phẩm máy ảnh',
    image: '/2hand/lovable-uploads/039676f6-d904-41fa-84eb-f854516f811e.png',
    date: '10/05/2023',
    excerpt: 'Chỉ trong tháng này, toàn bộ máy ảnh và phụ kiện được giảm giá 20%. Cơ hội tuyệt vời để nâng cấp thiết bị của bạn!'
  },
  {
    id: 3,
    title: 'Loa JBL mới - Âm thanh sống động cho mọi không gian',
    image: '/2hand/lovable-uploads/1272c656-594f-4830-be97-787389110b43.png',
    date: '05/05/2023',
    excerpt: 'Khám phá dòng loa JBL mới với ánh sáng LED độc đáo, âm thanh vòm 360 độ và khả năng kết nối đa thiết bị.'
  },
  {
    id: 4,
    title: 'Trải nghiệm bay với các dòng drone mới nhất',
    image: '/2hand/lovable-uploads/ac570428-dae3-459a-8f47-9ddfd2120b14.png',
    date: '01/05/2023',
    excerpt: 'Khám phá thế giới từ trên cao với dòng drone mới nhất, trang bị camera 4K và khả năng bay ổn định trong mọi điều kiện thời tiết.'
  }
];

const NewsArticle = ({ article }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="h-48 overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center text-xs text-gray-500 mb-3">
        <Calendar className="w-3 h-3 mr-1" />
        <span>{article.date}</span>
      </div>
      <h3 className="font-bold text-lg mb-2">{article.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
      <Link to={`/news/${article.id}`}>
        <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
          Đọc thêm <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </Link>
    </div>
  </div>
);

const New = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Tin tức & Cập nhật</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cập nhật thông tin mới nhất về sản phẩm, khuyến mãi và mẹo sử dụng từ cửa hàng của chúng tôi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map(article => (
              <NewsArticle key={article.id} article={article} />
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-center">Đăng ký nhận bản tin</h2>
            <p className="text-gray-700 mb-6 text-center">
              Nhận thông báo về sản phẩm mới, khuyến mãi và mẹo hữu ích qua email
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default New;
