
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Về chúng tôi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Giới thiệu</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Tuyển dụng</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Tin tức</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Chính sách</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Bảo mật</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Vận chuyển</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Đổi trả</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Bảo hành</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Thông tin cửa hàng</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">Địa chỉ: Nghệ An - Việt Nam</li>
              <li className="text-gray-600">Điện thoại: 0979 830 697</li>
              <li className="text-gray-600">Email: 2handcongnghe37store@gmail.com</li>
              <li className="text-gray-600">Giờ làm việc: 24/24</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-4">Kết nối</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/Dominic97.vn?notif_id=1748141851036688&notif_t=profile_plus_admin_invite&ref=notif" className="text-gray-400 hover:text-blue-500"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/Dominic97.vn?notif_id=1748141851036688&notif_t=profile_plus_admin_invite&ref=notif" className="text-gray-400 hover:text-pink-500"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-red-500"><Youtube className="h-5 w-5" /></a>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Đăng ký nhận tin</h4>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="px-3 py-2 border border-gray-300 rounded-l-md text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <button className="bg-gray-900 text-white px-4 py-2 rounded-r-md text-sm hover:bg-black">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 text-center md:text-left">© 2025 2handcongnghe37 - Cửa Hàng Thiết Bị Điện Tử. Mọi quyền được bảo lưu.</p>
            <div className="flex items-center space-x-4">
              <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Payment" className="h-6" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="Payment" className="h-6" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Payment" className="h-6" />
              <img src="https://cdn-icons-png.flaticon.com/128/349/349222.png" alt="Payment" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
