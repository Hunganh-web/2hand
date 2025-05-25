
import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-white py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Miễn phí vận chuyển</h3>
            <p className="text-sm text-gray-600">Cho đơn hàng trên 500.000đ</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Hàng chính hãng</h3>
            <p className="text-sm text-gray-600">Cam kết 100% chính hãng</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Thanh toán dễ dàng</h3>
            <p className="text-sm text-gray-600">Nhiều phương thức thanh toán</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
