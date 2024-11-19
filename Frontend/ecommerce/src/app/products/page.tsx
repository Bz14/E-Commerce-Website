"use client";
import React from "react";
import Hero from "./Components/Hero";
import ProductList from "./Components/product_list";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <ProductList />
    </div>
  );
};

export default ProductPage;
