import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import BusinessSchema from "@/component/BusinessSchema";

const baseUrl =process.env.NEXT_PUBLIC_APP_URL ;


// các thẻ meta để cung cấp thông tin cho trình duyệt
// Trong next không cần đặt trong thẻ head
// Mà khai báo 1 đối tượng như dưới
export const metadata: Metadata = {
  
  title:{
    template : "%s | Tiệm hoa Vũng Tàu",// nếu page con có title "ProMax" --> title là : ProMax | Tiệm hoa Vũng Tàu
    default: "Hoa tươi 24/7 giao nhanh tại Vũng Tàu | Tiệm hoa Vũng Tàu" // page con không title sẽ dùng cái này

  }, // tiêu đề trang trên gg(50-->60 kí tự)
  description: "Chuyên thiết kế hoa siêu cấp vũ trụ, siêu vip pro max. Cam kết hoa tươi rói ròi rọi, giá rẻ như cho", // dòng mô tả hiện dưới tiêu đề(110-->160 kí tự)
  keywords: ["Hoa tươi Vũng Tàu","shop hoa tươi VT","Đặt hoa online"] , // các từ khóa để bot trình duyệt hiểu nhanh về mình nói vấn đề gì, những từ người dùng có thể tìm trên gg
  openGraph:{
    title: "Hoa tươi 24/7 giao nhanh tại Vũng Tàu | Tiệm hoa Vũng Tàu", 
    description: "Chuyên thiết kế hoa siêu cấp vũ trụ, siêu vip pro max. Cam kết hoa tươi rói ròi rọi, giá rẻ như cho", 
    url: `${baseUrl}`,
    siteName: "Tiệm hoa Vũng Tàu"   ,// Tên website, thương hiệu
    images: {
      url:"/hoa.jpg",
      width:1200,
      height:630,
    } ,// Hình người khác thấy khi chia sẻ
    locale:"vi_VN"  ,// Khai báo ngôn ngữ và khu vực
    phoneNumbers:"0294884219", // Số điện thoại liên hệ
    emails :"ula@gmail.com",
    type:"website", // Khai báo loại nội dung của trang
    countryName:"Việt Nam",

  },// Định nghĩa trang khi được chia sẻ lên mạng xã hội như fb,zl,...
  alternates:{
    canonical: `${baseUrl}` // nói với gg đây là url gốc
  },
  metadataBase: new URL(`${baseUrl}`), // Định nghĩa url gốc
};

// dùng để điều khiển cách trang web hiển thị trên thiết bị
export const viewport: Viewport ={
  width :"device-width",
  initialScale:1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <head>
          <BusinessSchema/>
        </head>
        <body>
          <nav className="nav-bar">
            <div className="nav-content">
              <Link
                href="/"
                className="nav-logo"
              >
                🌸 Tiệm Hoa Vũng Tàu
              </Link>

              <div className="nav-links">
                <Link
                  href="/hoa-sinh-nhat"
                  className="nav-link-item"
                >
                  Hoa sinh nhật
                </Link>
                <Link
                  href="/hoa-8-3"
                  className="nav-link-item"
                >
                  Hoa 8/3
                </Link>
                <Link
                  href="/hoa-tiec"
                  className="nav-link-item"
                >
                  Hoa tiệc
                </Link>
                <Link
                  href="/hoa-valentine"
                  className="nav-link-item"
                >
                  Hoa Valentine
                </Link>
              </div>

              {/* Nút giả lập để giao diện cân đối */}
              <button className="hidden md:block px-4 py-2 text-sm font-semibold text-white bg-slate-600 rounded-full hover:bg-rose-700 transition-all">
                Liên hệ ngay
              </button>
            </div>
          </nav>
          {children}
        </body>
      </body>
    </html>
  );
}
