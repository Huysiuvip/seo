import { getCategories, getProducts } from "@/lib/db";
import { MetadataRoute } from "next";
const baseUrl =process.env.NEXT_PUBLIC_APP_URL ;

export default async function sitemap() : Promise<MetadataRoute.Sitemap>{
    const categories = await getCategories();
    const products = await getProducts();

    const categoriesPages = categories.map((cat) => ({
        url: `${baseUrl}/${cat.id}`,
        priority: 0.8,
    })).flat() as MetadataRoute.Sitemap;

    const productsPages = products.map((prod) => ({
        url: `${baseUrl}/products/${prod.id}`,
        priority: 0.6,
        // lastModified:`${prod.updateAt}` // báo gg sản phẩm đã thay đổi cần truy cập lại
    })).flat() as MetadataRoute.Sitemap;



    return [
        {
            url:`${baseUrl}`,
            changeFrequency :'weekly', // gợi ý tần xuất thay đổi của trang
            priority:1 // độ ưu tiên giá trị từ 0 --> 1
            
        },
        ...categoriesPages,
        ...productsPages,
    ]
}