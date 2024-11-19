"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Hero from "./Components/Hero";

const ProductPage = () => {
  const products = [
    { id: 1, name: "Sneaker 1", price: "$49.99", rating: 4.5, tag: "New" },
    { id: 2, name: "Sneaker 2", price: "$59.99", rating: 4.0, tag: "Offer" },
    { id: 3, name: "High Heel", price: "$39.99", rating: 4.8, tag: "Hot" },
    { id: 4, name: "High Heel", price: "$39.99", rating: 4.8, tag: "Hot" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      {/* Product Grid Section */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Special Shoes With Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src="https://via.placeholder.com/150"
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <div className="flex items-center justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={`${
                      i < Math.round(product.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm bg-green-100 text-green-600 py-1 px-2 rounded-full">
                {product.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
