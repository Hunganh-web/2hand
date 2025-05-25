
import React from 'react';
import { FileText } from 'lucide-react';
import { Product } from '@/data/productData';

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center mb-4">
        <FileText className="mr-2 h-5 w-5 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Mô tả sản phẩm</h2>
      </div>
      <div className="prose max-w-none text-gray-700">
        <p>
          {product.name} là một sản phẩm {product.category} chất lượng cao từ {product.brand}. 
          Sản phẩm cao cấp này mang đến hiệu suất và độ bền tuyệt vời cho mọi nhu cầu {product.category} của bạn.
        </p>
        <p className="mt-4">
          Với đánh giá người dùng {product.rating} trên 5 sao, {product.category} này được khách hàng của chúng tôi đánh giá rất cao.
          {!product.inStock && " Rất tiếc, mặt hàng này hiện đang hết hàng. Vui lòng quay lại sau hoặc duyệt qua các sản phẩm khác của chúng tôi."}
        </p>
        <p className="mt-4">
          Sản phẩm này được thiết kế với sự tập trung vào chất lượng và hiệu suất. Bạn sẽ trải nghiệm sự khác biệt ngay lập tức khi sử dụng {product.name}.
          Chúng tôi tự hào cung cấp những sản phẩm tốt nhất từ {product.brand}, một thương hiệu đã được tin tưởng trong nhiều năm.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
