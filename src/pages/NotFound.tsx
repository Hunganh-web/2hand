
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center max-w-md px-6">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mb-8">Trang này không tồn tại</p>
          <p className="text-gray-500 mb-8">
            Trang bạn đang tìm kiếm có thể đã bị xóa hoặc di chuyển đến một URL khác.
          </p>
          <Button asChild>
            <a href="/" className="px-6">
              Quay lại trang chủ
            </a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
