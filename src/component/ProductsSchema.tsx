// structure data

import { Product, WithContext } from "schema-dts"
const baseUrl =process.env.NEXT_PUBLIC_APP_URL ;

interface Props {
    name : string,
    description? : string,
    price? : number,
    productId:number

}
export default function ProductSchema({
    name ,
    description,
    price,
    productId,

}:Props) {
    const jsonLd : WithContext<Product> = {
        "@context" : "https://schema.org",
        "@type": "Product",
        name :name,
        description: description,
        brand :{
            "@type" :"Brand",
            name :" Tiệm hoa Vũng Tàu"
        }, // thương hiệu
        offers:{
            "@type": "Offer",
            url : `${baseUrl}/products/${productId}`,
            priceCurrency: "VND",
            price: price,
            availability:"https://schema.org/InStock", // tình trạng còn hàng
            itemCondition:"https://schema.org/NewCondition" // sản phẩm mới
        }
    }


    return(
        <script 
            type="application/lg+json"
            dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} 
             
        >


        </script>
    )
}