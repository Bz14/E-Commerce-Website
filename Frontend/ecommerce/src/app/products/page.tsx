"use client";
import Hero from "./Components/Hero";
import ProductList from "./Components/product_list";
import SearchBar from "../Components/UI/searchbar";
import { recommended, products, titles } from "./Components/sampledata";
import Filter from "../Components/UI/filter";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/index";
import { useEffect } from "react";
import { fetchProducts } from "../store/slices/productSlice";
const ProductPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    titles.forEach((title) => {
      if (!categories[title]) {
        dispatch(fetchProducts({ category: title }));
      }
    });
  }, [dispatch, categories]);
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <div>
        <div className="flex justify-center items-center">
          <div className="w-[500px]">
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-fit ml-10">
            <Filter />
          </div>
          <div className="flex-grow">
            <ProductList products={recommended} title="Recommended" />
          </div>
        </div>
      </div>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}
      {products.map((product, index) => (
        <ProductList key={index} products={product} title={titles[index]} />
      ))}
    </div>
  );
};

export default ProductPage;
