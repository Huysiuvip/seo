import { MetadataRoute } from "next";
const baseUrl =process.env.NEXT_PUBLIC_APP_URL ;
// quy định phần nào được phép truy cập dữ liệu, phần nào không
export default function robots():MetadataRoute.Robots{
    return{
        rules :{
            userAgent:"*", // xác định bot nào sẽ dùng rule này * là tất cả
            allow:"/", // cho phép bot truy cập vào đường dẫn nào  "/"root của website toàn bộ tràn web
            disallow:["/admin",''], // không cho bot truy cập
        },
        sitemap : `${baseUrl}/sitemap.xml`
    }
}