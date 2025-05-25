
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Phản hồi của khách hàng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            name="Nguyễn Văn A"
            image="https://randomuser.me/api/portraits/men/32.jpg"
            text="Tôi đã mua một chiếc laptop từ 2handcongnghe37 và tôi rất hài lòng về chất lượng sản phẩm và dịch vụ khách hàng. Họ rất chuyên nghiệp và hỗ trợ tôi trong suốt quá trình mua hàng."
            rating={5}
          />
          <TestimonialCard 
            name="Trần Thị B"
            image="https://randomuser.me/api/portraits/women/44.jpg"
            text="Dịch vụ giao hàng nhanh chóng và sản phẩm đúng như mô tả. Tôi sẽ tiếp tục mua sắm tại đây trong tương lai. Cảm ơn 2handcongnghe37 đã mang đến trải nghiệm mua sắm tuyệt vời."
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
