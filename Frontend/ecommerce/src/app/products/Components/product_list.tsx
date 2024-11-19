"use client";
import ProductCard from "./productCard";
import shoe1 from "@assets/shoe/shoe2.png";
import shoe2 from "@assets/shoe/shoe1.png";
import shoe3 from "@assets/shoe/shoe5.png";
import shoe4 from "@assets/shoe/shoe6.png";
import shoe5 from "@assets/shoe/shoe7.png";
import shoe6 from "@assets/shoe/shoe6.png";
import shoe7 from "@assets/shoe/shoe1.png";
import shoe8 from "@assets/shoe/shoe3.png";
import { useState } from "react";
import Pagination from "./pagination";

const ProductList = () => {
  const products = [
    {
      id: 1,
      img: shoe1,
      name: "Sneaker 1",
      price: "$49.99",
      rating: 4.5,
      tags: ["New", "Gucci"],
    },
    {
      id: 2,
      img: shoe2,
      name: "Sneaker 2",
      price: "$59.99",
      rating: 4.0,
      tags: ["Offer", "Gucci"],
    },
    {
      id: 3,
      img: shoe3,
      name: "High Heel",
      price: "$39.99",
      rating: 4.8,
      tags: ["Hot", "Gucci"],
    },
    {
      id: 4,
      img: shoe4,
      name: "High Heel",
      price: "$39.99",
      rating: 4.8,
      tags: ["Hot", "Gucci"],
    },
    {
      id: 5,
      img: shoe5,
      name: "Sneaker 1",
      price: "$49.99",
      rating: 4.5,
      tags: ["New", "Gucci"],
    },
    {
      id: 6,
      img: shoe6,
      name: "Sneaker 2",
      price: "$59.99",
      rating: 4.0,
      tags: ["Offer", "Gucci"],
    },
    {
      id: 7,
      img: shoe7,
      name: "High Heel",
      price: "$39.99",
      rating: 4.8,
      tags: ["Hot", "Gucci"],
    },
    {
      id: 8,
      img: shoe8,
      name: "High Heel",
      price: "$39.99",
      rating: 4.8,
      tags: ["Hot", "Gucci"],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl text-primaryDark font-bold text-center mb-6">
        Shoes for Men and Women
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
