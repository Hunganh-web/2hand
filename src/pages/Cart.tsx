
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  brand?: string;
  color?: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error('Error parsing cart data:', error);
        setCartItems([]);
      }
    }
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
    toast({
      title: "Cập nhật số lượng",
      description: "Số lượng sản phẩm đã được cập nhật thành công",
      duration: 4000
    });
  };

  const handleDecreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCart(updatedCart);
    toast({
      title: "Cập nhật số lượng",
      description: "Số lượng sản phẩm đã được cập nhật thành công",
      duration: 4000
    });
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCart(updatedCart);
    toast({
      title: "Đã xóa sản phẩm",
      description: "Sản phẩm đã được xóa khỏi giỏ hàng của bạn",
      duration: 4000
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/checkout');
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Giỏ hàng của bạn</h1>
            <Link to="/products">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="flex justify-center mb-4">
                <ShoppingBag className="h-16 w-16 text-gray-300" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Giỏ hàng trống</h2>
              <p className="text-gray-500 mb-6">Bạn chưa thêm sản phẩm nào vào giỏ hàng.</p>
              <Link to="/products">
                <Button>Xem sản phẩm</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 border-b bg-gray-50 text-gray-600 text-sm font-medium">
                    <div className="col-span-7">Sản phẩm</div>
                    <div className="col-span-2 text-center">Số lượng</div>
                    <div className="col-span-2 text-right">Giá</div>
                    <div className="col-span-1"></div>
                  </div>

                  {cartItems.map((item, index) => (
                    <div 
                      key={item.id}
                      className={`grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 sm:p-6 items-center ${
                        index !== cartItems.length - 1 ? 'border-b' : ''
                      }`}
                    >
                      <div className="col-span-7 flex items-center space-x-4">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain bg-gray-50 rounded"
                        />
                        <div>
                          <h3 className="font-medium text-sm sm:text-base">{item.name}</h3>
                          <div className="text-gray-500 text-xs sm:text-sm mt-1">
                            {item.brand && <span>Thương hiệu: {item.brand}</span>}
                            {item.color && (
                              <span className="block sm:inline sm:ml-2">Màu: {item.color}</span>
                            )}
                          </div>
                          <div className="block sm:hidden mt-2">
                            <span className="font-semibold">{formatCurrency(item.price)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 flex justify-center">
                        <div className="flex items-center border rounded">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 p-0" 
                            onClick={() => handleDecreaseQuantity(item.id)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 p-0" 
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="col-span-2 hidden sm:block text-right">
                        <span className="font-semibold">{formatCurrency(item.price)}</span>
                      </div>

                      <div className="col-span-1 flex justify-end">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-gray-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1 h-fit">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="font-semibold text-lg mb-4">Thông tin đơn hàng</h2>
                  
                  <div className="space-y-3 pb-4 border-b">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tạm tính</span>
                      <span>{formatCurrency(calculateTotal())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phí vận chuyển</span>
                      <span>Miễn phí</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4 mb-6">
                    <span className="font-semibold text-lg">Tổng cộng</span>
                    <span className="font-semibold text-lg">{formatCurrency(calculateTotal())}</span>
                  </div>
                  
                  <Button 
                    className="w-full mb-3"
                    onClick={handleCheckout}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Đang xử lý...' : 'Thanh toán'}
                  </Button>
                  
                  <Link to="/products">
                    <Button variant="outline" className="w-full">
                      Tiếp tục mua sắm
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
