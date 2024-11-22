"use client";
import React from "react";
import Hero from "./Components/Hero";
import ProductList from "./Components/product_list";
import SearchBar from "../Components/UI/searchbar";
import { recommended, products, titles } from "./Components/sampledata";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <div>
        <div className="flex justify-center items-center">
          <SearchBar />
        </div>

        <ProductList products={recommended} title="Recommended" />
      </div>
      {products.map((product, index) => (
        <ProductList key={index} products={product} title={titles[index]} />
      ))}
    </div>
  );
};

export default ProductPage;
