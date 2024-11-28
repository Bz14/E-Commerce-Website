"use client";
import React from "react";
import Hero from "./Components/Hero";
import ProductList from "./Components/product_list";
import SearchBar from "../Components/UI/searchbar";
import { recommended, products, titles } from "./Components/sampledata";
import Filter from "../Components/UI/filter";
import { useSelector } from "react-redux";
import { AuthState } from "../globals";

const ProductPage = () => {
  const accessToken = useSelector((state: AuthState) => state.accessToken);
  const profile = useSelector((state: AuthState) => state.userProfile);
  console.log(accessToken, profile);
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
      {products.map((product, index) => (
        <ProductList key={index} products={product} title={titles[index]} />
      ))}
    </div>
  );
};

export default ProductPage;
