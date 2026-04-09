"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <main className="p-8 category-container">
      <h1>Chào mừng đến với Tiệm Hoa Vũng Tàu</h1>
      <p>Địa chỉ cung cấp hoa tươi chất lượng cao tại thành phố biển.</p>

      <form
        onSubmit={handleSearch}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Tìm hoa hồng, hoa hướng dương..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button
          type="submit"
          className="search-button"
        >
          Tìm kiếm
        </button>
      </form>
    </main>
  );
}
