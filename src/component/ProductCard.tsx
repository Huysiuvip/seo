import { Product } from "@/lib/db";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li>
      <Link
        className="product-card group"
        href={`/products/${product.id}`}
      >
        <div>
          <span className="product-info-name">{product.name}</span>
          <div className="product-info-tags">Tags: {product.tags.join(", ")}</div>
        </div>
        <span className="product-price">
          {product.price.toLocaleString("vi-VN")}đ
        </span>
      </Link>
    </li>
  );
};

export default ProductCard;
