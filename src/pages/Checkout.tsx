import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/productData';
import { toast } from '@/hooks/use-toast';
import { Check, CreditCard, ShoppingBag } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  brand?: string;
  color?: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = parseInt(queryParams.get('product') || '0');

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [singleProduct, setSingleProduct] = useState<CartItem | null>(null);
  const [isCartMode, setIsCartMode] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
    paymentMethod: 'cod',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find(p => p.id === productId);
      if (foundProduct) {
        setSingleProduct({
          ...foundProduct,
          quantity: 1
        });
        setIsCartMode(false);
      } else {
        navigate('/');
      }
    } else {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        try {
          const parsedCart = JSON.parse(storedCart);
          if (parsedCart.length === 0) {
            navigate('/');
            return;
          }
          setCartItems(parsedCart);
        } catch (error) {
          console.error('Error parsing cart data:', error);
          navigate('/');
        }
      } else {
        navigate('/');
      }
    }
  }, [productId, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(value);
  };

  const calculateTotal = () => {
    if (!isCartMode && singleProduct) {
      return singleProduct.price;
    }
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin.",
        variant: "destructive",
        duration: 4000
      });
      setIsSubmitting(false);
      return;
    }

    // Chuẩn bị dữ liệu đơn hàng
    const orderData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      notes: formData.notes,
      paymentMethod: formData.paymentMethod,
      products: isCartMode
        ? cartItems.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
          }))
        : singleProduct
          ? [{
              name: singleProduct.name,
              quantity: singleProduct.quantity,
              price: singleProduct.price
            }]
          : [],
      totalAmount: calculateTotal(),
      orderDate: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwwzAYRkjhWDOcg2BEyNY-Yni1EjYUHsfUXW715eAevFWNkhNFkQyPB5j-fJdfO_Fo5TQ/exec', {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setIsSubmitting(false);
      setIsCompleted(true);
      if (isCartMode) {
        localStorage.removeItem('cart');
      }
      toast({
        title: "Đặt hàng thành công",
        description: "Đơn hàng của bạn đã được xác nhận.",
        duration: 4000
      });
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Lỗi kết nối",
        description: `Không thể kết nối tới server: ${error.message}. Vui lòng kiểm tra mạng và thử lại.`,
        variant: "destructive",
        duration: 4000
      });
      console.error('Fetch error:', error);
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold mb-4 text-gray-800">Đặt hàng thành công!</h1>
              <p className="text-gray-600 mb-6">
                Cám ơn bạn đã đặt hàng. Chúng tôi đã gửi email xác nhận đến {formData.email}.
              </p>
              <div className="border-t border-b border-gray-200 py-4 my-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Mã đơn hàng:</span>
                  <span>#{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Ngày đặt hàng:</span>
                  <span>{new Date().toLocaleDateString('vi-VN')}</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-left">Sản phẩm:</h3>
                {!isCartMode && singleProduct ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={singleProduct.image} alt={singleProduct.name} className="w-16 h-16 object-contain mr-4" />
                      <span>{singleProduct.name}</span>
                    </div>
                    <span>{formatCurrency(singleProduct.price)}</span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src={item.image} alt={item.name} className="w-12 h-12 object-contain mr-3" />
                          <div>
                            <div>{item.name}</div>
                            <div className="text-xs text-gray-500">SL: {item.quantity}</div>
                          </div>
                        </div>
                        <span>{formatCurrency(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Tổng cộng:</span>
                <span className="font-bold">{formatCurrency(calculateTotal())}</span>
              </div>
              <div className="mt-8">
                <Button onClick={() => navigate('/')} className="px-8">
                  Quay lại trang chủ
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Thanh toán</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Thông tin giao hàng</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Thành phố</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Ghi chú đơn hàng</label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Yêu cầu đặc biệt về đơn hàng..."
                      />
                    </div>

                    <div className="border-t pt-4 mt-6">
                      <h2 className="text-xl font-semibold mb-4">Phương thức thanh toán</h2>
                      <div className="space-y-3">
                        <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>Thanh toán khi nhận hàng (COD)</span>
                        </label>
                        <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <div className="flex items-center">
                            <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                            <span>Thẻ tín dụng/Thẻ ghi nợ</span>
                          </div>
                        </label>
                        <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="bank"
                            checked={formData.paymentMethod === 'bank'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>Chuyển khoản ngân hàng</span>
                        </label>
                      </div>
                      {formData.paymentMethod === 'bank' && (
                        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h3 className="font-semibold mb-3 text-center">Thông tin chuyển khoản</h3>
                          <div className="flex justify-center mb-4">
                            <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                              <div className="text-center text-gray-500">
                                <div className="text-4xl mb-2">📱</div>
                                <div className="text-sm">Mã QR chuyển khoản</div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="font-medium">Ngân hàng:</span>
                              <span>Techcombank</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Số tài khoản:</span>
                              <span>00000000000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Chủ tài khoản:</span>
                              <span>Tran Huu Hung</span>
                            </div>
                          </div>
                          <Alert className="mt-4 bg-yellow-50 border-yellow-200">
                            <AlertDescription className="text-sm">
                              <strong>Lưu ý quan trọng:</strong><br />
                              Quý khách vui lòng lưu lại hóa đơn chuyển khoản để tránh xảy ra tranh chấp không đáng có. Mọi hành vi làm giả hóa đơn đều có thể vi phạm pháp luật.
                            </AlertDescription>
                          </Alert>
                        </div>
                      )}
                    </div>
                    <Alert className="mt-4 bg-blue-50 border-blue-200">
                      <AlertDescription>
                        Thông tin đơn hàng của bạn sẽ được bảo mật và sử dụng để xử lý đơn hàng theo chính sách bảo mật của chúng tôi.
                      </AlertDescription>
                    </Alert>
                    <div className="mt-6">
                      <Button 
                        type="submit" 
                        className="w-full py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Đang xử lý...' : 'Hoàn tất đơn hàng'}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
