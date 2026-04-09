import fs from "fs";
import path from "path";
import { cache } from "react";


export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  tags: string[];
}

// Đọc file db.json
const getDb = () => {
  const filePath = path.join(process.cwd(), "./src/lib/db.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

export const getCategories = cache(async (): Promise<Category[]> => {
  const db = getDb();
  return db.categories;
});

export const getProducts = cache(async (): Promise<Category[]> => {
  const db = getDb();
  return db.products;
});

export const getCategoryById =cache( async (id: string): Promise<Category | undefined> => {
  const db = getDb();
  return db.categories.find((cat: Category) => cat.id === id);
});

export const getProductsByCategory = cache(async (
  category: string,
): Promise<Product[]> => {
  const db = getDb();
  return db.products.filter(
    (prod: Product) => prod.category.toLowerCase() === category.toLowerCase(),
  );
});

export const getProductById = cache( async (id: string): Promise<Product> => {
  const db = getDb();
  return db.products.find((prod: Product) => prod.id.toString() === id);
});

export const searchProducts =cache( async (query: string): Promise<Product[]> => {
  const db = getDb();
  const lowerQuery = query.toLowerCase();
  return db.products.filter(
    (prod: Product) =>
      prod.name.toLowerCase().includes(lowerQuery) ||
      prod.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  );
});
