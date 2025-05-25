
import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
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

const ShoppingCartDropdown = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

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
  }, [isOpen]); // Reload when cart is opened

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
      duration: 4000,
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
      duration: 4000,
    });
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCart(updatedCart);
    toast({
      title: "Đã xóa sản phẩm",
      description: "Sản phẩm đã được xóa khỏi giỏ hàng của bạn",
      duration: 4000,
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

  const handleViewCart = () => {
    onClose();
    navigate('/cart');
  };

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end">
      <div className="fixed inset-0 bg-black/20" onClick={onClose}></div>
      <div className="bg-white shadow-lg w-full max-w-md h-full overflow-auto z-10 flex flex-col animate-slide-in-right">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            <h2 className="font-semibold text-lg">Giỏ hàng của bạn</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-grow overflow-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-6">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">Giỏ hàng của bạn đang trống</p>
              <Button onClick={onClose}>Tiếp tục mua sắm</Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0 rounded overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-gray-500 text-xs">{item.brand || 'Vexel'}</p>
                        {item.color && <p className="text-xs text-gray-500">Màu: {item.color}</p>}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6" 
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
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
                      <p className="font-semibold">{formatCurrency(item.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Tổng cộng:</span>
              <span className="font-bold">{formatCurrency(calculateTotal())}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={handleViewCart}>
                Xem giỏ hàng
              </Button>
              <Button onClick={handleCheckout}>
                Thanh toán
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartDropdown;
