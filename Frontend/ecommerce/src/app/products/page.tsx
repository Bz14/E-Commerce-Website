"use client";
import React from "react";
import Hero from "./Components/Hero";
import ProductList from "./Components/product_list";
import { products, titles } from "./Components/sampledata";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      {products.map((product, index) => (
        <ProductList key={index} products={product} title={titles[index]} />
      ))}
    </div>
  );
};

export default ProductPage;
