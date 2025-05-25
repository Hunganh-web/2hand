
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/data/productData';
import { toast } from '@/hooks/use-toast';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductInfo from '@/components/ProductInfo';
import ProductDescription from '@/components/ProductDescription';
import ProductSpecifications from '@/components/ProductSpecifications';
import SimilarProducts from '@/components/SimilarProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = parseInt(id || '0');
  const product = products.find(p => p.id === productId);
  const [similarProducts, setSimilarProducts] = useState([]);
  
  // Additional product images (simulated)
  const productImages = product ? [
    product.image,
    // Add additional angle views of the same product
    product.image.replace('.png', '-angle2.png') || product.image,
    product.image.replace('.png', '-angle3.png') || product.image,
  ] : [];

  useEffect(() => {
    // Scroll to top when component mounts or id changes
    window.scrollTo(0, 0);
    
    if (product) {
      // Find similar products in the same category
      const similar = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      setSimilarProducts(similar);
    }
  }, [product, id]); // Added id as dependency to trigger scroll when changing products

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h1>
            <Link to="/products">
              <Button>Quay lại trang sản phẩm</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.inStock) {
      // Add to cart logic
      // Get existing cart or initialize empty array
      const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Check if product already exists in cart
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity if product already in cart
        cartItems[existingItemIndex].quantity += 1;
      } else {
        // Add new product to cart
        cartItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          brand: product.brand,
          quantity: 1
        });
      }
      
      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cartItems));
      
      // Update cart indicator (you would typically use context for this)
      const cartBadge = document.querySelector('.relative .absolute');
      if (cartBadge) {
        cartBadge.textContent = cartItems.reduce((total: number, item: any) => total + item.quantity, 0).toString();
      }
      
      toast({
        title: "Thêm vào giỏ hàng thành công",
        description: `${product.name} đã được thêm vào giỏ hàng của bạn.`,
      });
    }
  };

  const handleBuyNow = () => {
    if (product.inStock) {
      // Redirect to checkout page with product information
      navigate(`/checkout?product=${productId}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-6">
            <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại Sản phẩm
            </Link>
          </div>

          {/* Product Details Card with Enhanced Gradient */}
          <div className="bg-gradient-to-br from-blue-300 via-indigo-200 to-purple-300 rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <ProductImageGallery 
                productImages={productImages} 
                productName={product.name}
              />
              <ProductInfo 
                product={product} 
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            </div>
          </div>

          <ProductDescription product={product} />
          <ProductSpecifications product={product} />
          <SimilarProducts similarProducts={similarProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
