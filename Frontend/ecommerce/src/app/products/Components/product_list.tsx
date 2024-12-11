"use client";
import ProductCard from "./productCard";
import { useState } from "react";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/index";
import { fetchProducts, setPage } from "@/app/store/slices/productSlice";

type Product = {
  id: number;
  img: { src: string };
  name: string;
  price: string;
  rating: number;
  tags: string[];
};

type ProductListProps = {
  products: Product[];
  title: string;
};

const ProductList = ({ products, title }: ProductListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector((state: RootState) => state.products);

  const current = categories[title]?.pagination.currentPage || 1;
  const total = categories[title]?.pagination.totalPages || 1;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const next = () => {
    // const newPage = Math.min(currentPage + 1, total);
    // dispatch(setPage({ category: title, page: newPage }));
    // dispatch(fetchProducts({ category: title, page: newPage }));
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const prev = () => {
    // const newPage = Math.max(currentPage - 1, 1);
    // dispatch(setPage({ category: title, page: newPage }));
    // dispatch(fetchProducts({ category: title, page: newPage }));
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl text-primaryDark font-bold text-center mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            rating={product.rating}
            tags={product.tags}
          />
        ))}
      </div>
      <Pagination
        goToNextPage={next}
        goToPreviousPage={prev}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductList;
