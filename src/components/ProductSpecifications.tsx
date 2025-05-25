
import React from 'react';
import { List } from 'lucide-react';
import { Product } from '@/data/productData';

interface ProductSpecificationsProps {
  product: Product;
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product }) => {
  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center mb-4">
        <List className="mr-2 h-5 w-5 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Thông số kỹ thuật</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Thông tin chung</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex justify-between">
              <span>Thương hiệu:</span>
              <span className="font-medium">{product.brand}</span>
            </li>
            <li className="flex justify-between">
              <span>Model:</span>
              <span className="font-medium">{product.name}</span>
            </li>
            <li className="flex justify-between">
              <span>Xuất xứ:</span>
              <span className="font-medium">Chính hãng</span>
            </li>
            <li className="flex justify-between">
              <span>Năm sản xuất:</span>
              <span className="font-medium">2023</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Đặc điểm</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex justify-between">
              <span>Danh mục:</span>
              <span className="font-medium">{product.category}</span>
            </li>
            <li className="flex justify-between">
              <span>Bảo hành:</span>
              <span className="font-medium">12 tháng</span>
            </li>
            <li className="flex justify-between">
              <span>Tình trạng:</span>
              <span className="font-medium">{product.inStock ? 'Còn hàng' : 'Hết hàng'}</span>
            </li>
            <li className="flex justify-between">
              <span>Đánh giá:</span>
              <span className="font-medium">{product.rating}/5 sao</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
