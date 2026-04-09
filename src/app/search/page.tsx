import ProductCard from "@/component/ProductCard";
import { formatVietnameseDate } from "@/lib";
import { searchProducts } from "@/lib/db";
import { title } from "process";


const baseUrl =process.env.NEXT_PUBLIC_APP_URL ;
export async function generateMetadata({searchParams,}:{searchParams:Promise<{q:string}>}) {
  const {q} = await searchParams;
  const product = await searchProducts(q);
  const topProduct =  product.slice(0,10).map(p => p.name.toLocaleLowerCase())
  if(!q){
    return{
      title:"Tìm kiếm hoa tươi tại vũng tàu",
      description:"kasvdlnadvklannvdasvn",
      robots:{
        index:false, // không tính vào xếp hạng SEO toàn trang
        follow:true,// vẫn có thể truy cập đường link bên trong trang kết quả
        "max-image-preview":"large",// gg cho phép hiển thị image lớn trong kết quả tìm kiếm
        "max-video-preview":"-1", // hiện video preview nếu có
        "max-snippet":"-1",// không giới hạn kí tự trên đoạn mô tả
      },
      googleBot:{ // tùy chỉnh trình duyệt riêng
        index:true, 
        follow:true,// vẫn có thể truy cập đường link bên trong trang kết quả
      
      },
    }

  }
  return{
    title:`Mẫu ${product.length} đẹp nhất trong ${formatVietnameseDate(new Date())}`,
        description:`Khám phá bộ sưu tập ${product.length} thiết kế độc đáo tại VT`,
        keywords: [
          "Hoa tươi Vũng Tàu",
          "shop hoa tươi VT",
          "Đặt hoa online",
          `${product.length}`, 
          `mẫu ${product.length} đẹp`,
          ...topProduct
        ] ,
        openGraph:{
          title:`Mẫu ${product.length} đẹp nhất trong ${formatVietnameseDate(new Date())}`,
          description:`Khám phá bộ sưu tập ${product.length} thiết kế độc đáo tại VT`,
          url:`${baseUrl}/search?q=${encodeURIComponent(q)}`,
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
        },
        alternates:{
        canonical: `${baseUrl}/search?q=${encodeURIComponent(q)}` // nói với gg đây là url gốc
      },
      }
 }
  



export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  const products = await searchProducts(q);

  return (
    <main className="category-container">
      <h1 className="category-title">Kết quả cho: &quot;{q}&quot;</h1>
      <p className="category-description">
        Top {products.length} sản phẩm {q} đẹp nhất dành cho bạn.
      </p>

      {products && products.length > 0 ? (
        <ul className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      ) : (
        <p className="empty-message">
          Rất tiếc, chúng tôi không tìm thấy sản phẩm nào phù hợp với từ khóa &quot;
          {q}&quot;.
        </p>
      )}
    </main>
  );
}
