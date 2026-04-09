import ProductCard from "@/component/ProductCard";
import { formatVietnameseDate } from "@/lib";
import { getCategoryById, getProductsByCategory } from "@/lib/db";
import { notFound } from "next/navigation";


const baseUrl =process.env.NEXT_PUBLIC_APP_URL ;

// metadata động
export async function generateMetadata({params} :PageProps<"/[category]">) {
  const {category : categoryId} = await params;

  const category = await getCategoryById(categoryId);

  if(!category) notFound();

  const categoryName = category.name.toLocaleLowerCase();

  const product = await getProductsByCategory(categoryId)

  const topProducts = product.slice(0,10).map((p)=> p.name.toLocaleLowerCase());
  
  // những gì khai báo sẽ  đè trong layout
  return{
    title:`Mẫu ${categoryName} đẹp nhất trong ${formatVietnameseDate(new Date())}`,
    description:`Khám phá bộ sưu tập ${categoryName} thiết kế độc đáo tại VT`,
    keywords: [
      "Hoa tươi Vũng Tàu",
      "shop hoa tươi VT",
      "Đặt hoa online",
      `${categoryName}`, 
      `mẫu ${categoryName} đẹp`,
      ...topProducts
    ] ,
    openGraph:{
      title:`Mẫu ${categoryName} đẹp nhất trong ${formatVietnameseDate(new Date())}`,
      description:`Khám phá bộ sưu tập ${categoryName} thiết kế độc đáo tại VT`,
      url:`${baseUrl}/${categoryId}`,
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
    canonical: `${baseUrl}/${categoryId}` // nói với gg đây là url gốc
  },
  }
}

export default async function CategoryPage({ params }: PageProps<"/[category]">) {
  const { category: categoryId } = await params;
  const category = await getCategoryById(categoryId);

  if (!category) {
    return notFound();
  }

  const categoryName = category.name.toLowerCase();
  const products = await getProductsByCategory(categoryId);

  return (
    <main className="category-container">
      <h1 className="category-title">Danh mục: {categoryName}</h1>
      <p className="category-description">
        Hiển thị các mẫu hoa thuộc nhóm {categoryName}...
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
          Hiện chưa có sản phẩm nào trong danh mục này.
        </p>
      )}
    </main>
  );
}
