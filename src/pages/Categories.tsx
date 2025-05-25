
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Giới thiệu về 2HANDCONGNGHE37</h1>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Cửa hàng Điện tử Cao cấp - Mang đến những trải nghiệm công nghệ tốt nhất cho khách hàng từ năm 2010
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <img 
                src="/2hand/lovable-uploads/43bed690-1f25-4aa8-ae49-5d26b2ece4d9.png" 
                alt="Logo 2HANDCONGNGHE37" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Câu chuyện của chúng tôi</h2>
              <p className="text-gray-600 mb-4">
                2HANDCONGNGHE37 được thành lập vào năm 2010 với mục tiêu mang đến những sản phẩm công nghệ cao cấp, chất lượng cao cho người tiêu dùng Việt Nam. Từ một cửa hàng nhỏ tại Hà Nội, chúng tôi đã phát triển thành một trong những nhà phân phối thiết bị điện tử hàng đầu tại Việt Nam.
              </p>
              <p className="text-gray-600">
                Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi tự hào là đối tác tin cậy của nhiều thương hiệu công nghệ hàng đầu thế giới như Apple, Sony, Canon, DJI và nhiều hãng khác. Đội ngũ nhân viên chuyên nghiệp và am hiểu sâu về công nghệ của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ quý khách hàng lựa chọn sản phẩm phù hợp nhất.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sứ mệnh & Tầm nhìn</h2>
              <p className="max-w-3xl mx-auto text-gray-600">
                Chúng tôi tin rằng công nghệ có thể nâng cao chất lượng cuộc sống và tạo ra những giá trị đích thực
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sứ mệnh</h3>
                <p className="text-gray-600">
                  Sứ mệnh của 2HANDCONGNGHE37 là cung cấp những sản phẩm công nghệ chất lượng cao với giá cả hợp lý, đi kèm với dịch vụ khách hàng xuất sắc. Chúng tôi cam kết mang đến trải nghiệm mua sắm thuận lợi và đáng tin cậy, giúp khách hàng dễ dàng tiếp cận với công nghệ hiện đại.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tầm nhìn</h3>
                <p className="text-gray-600">
                  Tầm nhìn của chúng tôi là trở thành nhà phân phối thiết bị điện tử hàng đầu tại Việt Nam, được công nhận về chất lượng sản phẩm, dịch vụ khách hàng và tính chính trực. Chúng tôi hướng tới việc xây dựng một hệ sinh thái công nghệ toàn diện, đáp ứng mọi nhu cầu của người tiêu dùng.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Giá trị cốt lõi</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Những giá trị định hình mọi hoạt động của chúng tôi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Chất lượng</h3>
              <p className="text-gray-600 text-sm">
                Chúng tôi cam kết chỉ cung cấp những sản phẩm chất lượng cao từ các thương hiệu uy tín.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Dịch vụ</h3>
              <p className="text-gray-600 text-sm">
                Dịch vụ khách hàng xuất sắc là ưu tiên hàng đầu của chúng tôi trong mọi tương tác.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Đổi mới</h3>
              <p className="text-gray-600 text-sm">
                Chúng tôi luôn tìm kiếm những sản phẩm và giải pháp mới để đáp ứng nhu cầu của khách hàng.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Tin cậy</h3>
              <p className="text-gray-600 text-sm">
                Chúng tôi xây dựng lòng tin với khách hàng thông qua sự minh bạch và chính trực trong mọi giao dịch.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
