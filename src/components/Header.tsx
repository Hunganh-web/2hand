
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import ShoppingCartDropdown from './ShoppingCartDropdown';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Update cart count when component mounts and when cart changes
    const updateCartCount = () => {
      try {
        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(count);
      } catch (error) {
        console.error('Error parsing cart data:', error);
        setCartItemCount(0);
      }
    };

    // Add event listener for storage changes (in case cart is updated in another tab)
    window.addEventListener('storage', updateCartCount);
    
    // Listen for custom event when cart is updated
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    // Initial cart count
    updateCartCount();

    // Check if page is scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCartOpen) {
      setIsCartOpen(false);
    }
  };

  // Cập nhật hàm handleNavClick để cuộn lên đầu trang khi click
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang
  };

  return (
    <header className={`w-full bg-white py-4 px-6 shadow-sm sticky top-0 z-50 transition-all ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo area with new logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleNavClick}>
              <img 
                src="/2hand/lovable-uploads/e3896581-355b-4a56-83ec-712f0a316e95.png" 
                alt="2HandCongNghe37 Logo" 
                className="h-12 md:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Trang chủ
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Cửa hàng
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Giới thiệu
            </Link>
            <Link to="/new" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Tin tức
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Liên hệ
            </Link>
          </nav>

          {/* Icons area with better mobile alignment */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden ml-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t mt-4 animate-fade-in">
            <ul className="space-y-4">
              <li>
                <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={handleNavClick}>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/products" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={handleNavClick}>
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link to="/categories" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={handleNavClick}>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/new" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={handleNavClick}>
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={handleNavClick}>
                  Liên hệ
                </Link>
              </li>
              <li className="pt-2 flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      
      {/* Shopping Cart Dropdown */}
      <ShoppingCartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
