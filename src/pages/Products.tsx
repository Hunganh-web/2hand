
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

// Product categories
const categories = [
  { id: 'all', name: 'Tất cả sản phẩm' },
  { id: 'drones', name: 'Máy bay không người lái' },
  { id: 'speakers', name: 'Loa' },
  { id: 'headphones', name: 'Tai nghe' },
  { id: 'cameras', name: 'Máy ảnh' },
  { id: 'lenses', name: 'Lens' }
];

// Quality filters
const qualityFilters = [
  { id: 'all', name: 'Tất cả chất lượng' },
  { id: '100', name: '100% (Mới)' },
  { id: '95-99', name: '95% - 99%' },
  { id: 'under-95', name: 'Dưới 95%' }
];

// Updated product data with quality
const products = [
  // Page 1
  // Drones
  {
    id: 1,
    name: 'DJI Phantom 4 Pro',
    price: 34990000,
    image: '/2hand/lovable-uploads/b3779d48-b0e8-42aa-a80e-51fc7ff3c1f7.png',
    category: 'drones',
    rating: 5,
    brand: 'DJI',
    inStock: true,
    quality: 100
  },
  {
    id: 2,
    name: 'DJI Phantom 4',
    price: 29990000,
    image: '/2hand/lovable-uploads/38d25bd6-cc8f-403e-b81a-a1051b83b955.png',
    category: 'drones',
    rating: 4,
    brand: 'DJI',
    inStock: true,
    quality: 95
  },
  {
    id: 3,
    name: 'DJI Standard Edition',
    price: 22990000,
    image: '/2hand/lovable-uploads/60c71281-fae2-4158-841f-a665a6ae7471.png',
    category: 'drones',
    rating: 4,
    brand: 'DJI',
    inStock: true,
    quality: 90
  },
  {
    id: 4,
    name: 'DJI Phantom Pro Gold',
    price: 39990000,
    image: '/2hand/lovable-uploads/b8fe67f3-6dce-434e-83d9-45f36e6468ce.png',
    category: 'drones',
    rating: 5,
    brand: 'DJI',
    inStock: false,
    quality: 100
  },
  {
    id: 5,
    name: 'DJI Mavic Pro',
    price: 27990000,
    image: '/2hand/lovable-uploads/04a5b206-ad47-4407-ae4d-2653618e34bb.png',
    category: 'drones',
    rating: 5,
    brand: 'DJI',
    inStock: true,
    quality: 99
  },
  {
    id: 6,
    name: 'JBL Xtreme',
    price: 6990000,
    image: '/2hand/lovable-uploads/d66aa1b5-673c-4ddc-b4e5-ebf53f11238c.png',
    category: 'speakers',
    rating: 4,
    brand: 'JBL',
    inStock: true,
    quality: 100
  },
  {
    id: 7,
    name: 'JBL Flip 4',
    price: 2990000,
    image: '/2hand/lovable-uploads/29bcdb08-f4e6-46f3-9f5c-3e52f8ac7e4f.png',
    category: 'speakers',
    rating: 4,
    brand: 'JBL',
    inStock: true,
    quality: 95
  },
  {
    id: 8,
    name: 'JBL Charge 3',
    price: 3490000,
    image: '/2hand/lovable-uploads/05bf989d-f163-4848-be81-8e8d4d77c5b2.png',
    category: 'speakers',
    rating: 5,
    brand: 'JBL',
    inStock: true,
    quality: 97
  },
  {
    id: 9,
    name: 'Marshall Stanmore',
    price: 8490000,
    image: '/2hand/lovable-uploads/dbe0946c-c473-4b39-8a9a-2c086ce05a73.png',
    category: 'speakers',
    rating: 5,
    brand: 'Marshall',
    inStock: false,
    quality: 85
  },
  {
    id: 10,
    name: 'Apple AirPods',
    price: 3990000,
    image: '/2hand/lovable-uploads/b9c60d61-5e73-46b5-bb40-18ac0541d69b.png',
    category: 'headphones',
    rating: 5,
    brand: 'Apple',
    inStock: true,
    quality: 100
  },
  {
    id: 11,
    name: 'JBL E55BT',
    price: 2990000,
    image: '/2hand/lovable-uploads/e463cb7f-b52b-4645-b42e-e1f832c2fa11.png',
    category: 'headphones',
    rating: 4,
    brand: 'JBL',
    inStock: true,
    quality: 98
  },
  {
    id: 12,
    name: 'Canon EOS 6D',
    price: 34990000,
    image: '/2hand/lovable-uploads/49109dc1-7a2c-4ede-8c80-88056d27723a.png',
    category: 'cameras',
    rating: 5,
    brand: 'Canon',
    inStock: true,
    quality: 100
  },
  {
    id: 13,
    name: 'Sony Alpha a7 II',
    price: 39990000,
    image: '/2hand/lovable-uploads/021a8019-0d40-4c19-9732-eab864ba42d3.png',
    category: 'cameras',
    rating: 5,
    brand: 'Sony',
    inStock: true,
    quality: 95
  },
  {
    id: 14,
    name: 'Canon EOS 5D Mark II',
    price: 45990000,
    image: '/2hand/lovable-uploads/b93c8080-1704-4f23-a8ec-645725797989.png',
    category: 'cameras',
    rating: 5,
    brand: 'Canon',
    inStock: true,
    quality: 100
  },
  {
    id: 15,
    name: 'Canon 70-200mm Lens',
    price: 18990000,
    image: '/2hand/lovable-uploads/d4785c36-0cab-4183-9ac9-cd49093eb86c.png',
    category: 'lenses',
    rating: 5,
    brand: 'Canon',
    inStock: true,
    quality: 92
  },
  {
    id: 16,
    name: 'Canon 24-70mm Lens',
    price: 14990000,
    image: '/2hand/lovable-uploads/d4785c36-0cab-4183-9ac9-cd49093eb86c.png',
    category: 'lenses',
    rating: 5,
    brand: 'Canon',
    inStock: true,
    quality: 88
  },
  {
    id: 17,
    name: 'Bose SoundSport Wireless Earbuds',
    price: 4990000,
    image: '/2hand/lovable-uploads/33eb2f2f-fac0-4d7d-92a1-d391631f68c6.png',
    category: 'headphones',
    rating: 5,
    brand: 'Bose',
    inStock: true,
    quality: 100
  },
  {
    id: 18,
    name: 'Samsung Galaxy Buds',
    price: 3290000,
    image: '/2hand/lovable-uploads/d56adc17-fcc8-413e-8528-fa5c800a1de4.png',
    category: 'headphones',
    rating: 4,
    brand: 'Samsung',
    inStock: true,
    quality: 96
  },
  {
    id: 19,
    name: 'Xiaomi Mi Neckband Bluetooth Earphones',
    price: 890000,
    image: '/2hand/lovable-uploads/782bc093-aa57-4f03-b42a-001feceed330.png',
    category: 'headphones',
    rating: 4,
    brand: 'Xiaomi',
    inStock: true,
    quality: 93
  },
  {
    id: 20,
    name: 'Plantronics Voyager Legend Bluetooth Headset',
    price: 1890000,
    image: '/2hand/lovable-uploads/9bbd1a2b-f143-4490-abce-2829a1a98528.png',
    category: 'headphones',
    rating: 4,
    brand: 'Plantronics',
    inStock: true,
    quality: 89
  },
  
];

const PRODUCTS_PER_PAGE = 16;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeQuality, setActiveQuality] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter products based on active category and quality
  let filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Apply quality filter
  if (activeQuality !== 'all') {
    filteredProducts = filteredProducts.filter(product => {
      if (activeQuality === '100') {
        return product.quality === 100;
      } else if (activeQuality === '95-99') {
        return product.quality >= 95 && product.quality < 100;
      } else if (activeQuality === 'under-95') {
        return product.quality < 95;
      }
      return true;
    });
  }
  
  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return a.id - b.id;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentPageProducts = sortedProducts.slice(startIndex, endIndex);
  
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Sản Phẩm Của Chúng Tôi</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập chất lượng cao của chúng tôi gồm flycam, loa, tai nghe và máy ảnh từ các thương hiệu hàng đầu thế giới.
            </p>
          </div>
        </div>
        
        {/* Product filters */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col gap-4 mb-8">
            {/* Category filters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Danh mục:</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setCurrentPage(1);
                    }}
                    className="mb-2"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quality filters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Chất lượng:</label>
              <div className="flex flex-wrap gap-2">
                {qualityFilters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeQuality === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setActiveQuality(filter.id);
                      setCurrentPage(1);
                    }}
                    className="mb-2"
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort filter */}
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-sm font-medium">Sắp xếp theo:</label>
              <select 
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Phổ biến</option>
                <option value="rating">Đánh giá</option>
                <option value="price-low">Giá: Thấp đến Cao</option>
                <option value="price-high">Giá: Cao đến Thấp</option>
              </select>
            </div>
          </div>
          
          {/* Product count */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Hiển thị {currentPageProducts.length} trong số {sortedProducts.length} sản phẩm
            </p>
          </div>
          
          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {currentPageProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
