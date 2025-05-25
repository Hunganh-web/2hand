import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import { Product } from '@/data/productData';
import ProductGrid from './ProductGrid';
import ProductCard from './ProductCard';

interface SimilarProductsProps {
  similarProducts: Product[];
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ similarProducts }) => {
  return (
    <div className="mt-12">
      <div className="flex items-center mb-6">
        <Package className="mr-2 h-5 w-5 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Sản phẩm tương tự</h2>
      </div>
      {similarProducts.length > 0 ? (
        <>
          <div className="block md:hidden">
            {/* Mobile View with 2 columns and horizontal scroll */}
            <div className="grid grid-cols-2 gap-4 overflow-x-auto pb-4">
              {similarProducts.map((product) => (
                <div key={product.id} className="min-w-[calc(50%-8px)]">
                  <Link to={`/product/${product.id}`}>
                    <ProductCard {...product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            {/* Desktop View - Keep existing */}
            <ProductGrid products={similarProducts} />
          </div>
        </>
      ) : (
        <p className="text-gray-600">Không tìm thấy sản phẩm tương tự.</p>
      )}
    </div>
  );
};

export default SimilarProducts;
