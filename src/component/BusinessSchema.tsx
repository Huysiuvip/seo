export default function BusinessSchema(){
    const jsonLd =  {
        "@context" : "https://schema.org",
         "@type": "Florist",
         name: "Tiệm hoa Vũng Tàu",
         image:"https://tiemhoavungtau.com/hoa.jpg",
         url:"https://tiemhoavungtau.com",
         telephone: "+84-988-454-55",
         address:{
            "@type":"PostalAddress",
            addressLocality:"Vũng Tàu",
            addressRegion:"Bà Rịa - Vũng Tàu",
            addressCountry:"VN"
         },
         areaServed:"Vũng Tàu"
        }
    

    return(
        <script 
            type="application/lg+json"
            dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} 
             
        >


        </script>
    )
}