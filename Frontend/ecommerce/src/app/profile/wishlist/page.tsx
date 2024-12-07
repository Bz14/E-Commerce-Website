"use client";
import { useState, useEffect } from "react";
import img from "@assets/dress3.jpg";
import { WishListProduct } from "@/app/globals";
import WishListCard from "./Components/wish_card";

const WishListPage = () => {
  const [wishlist, setWishlist] = useState<WishListProduct[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const fetchedWishlist: WishListProduct[] = [
        {
          id: 1,
          name: "Product 1",
          description: "A great product",
          price: 29.99,
          image: img,
        },
        {
          id: 2,
          name: "Product 2",
          description: "Another great product",
          price: 49.99,
          image: img,
        },
        {
          id: 3,
          name: "Product 3",
          description: "The best product",
          price: 19.99,
          image: img,
        },
        {
          id: 4,
          name: "Product 3",
          description: "The best product",
          price: 19.99,
          image: img,
        },
      ];
      setWishlist(fetchedWishlist);
    };
    fetchWishlist();
  }, []);

  // const handleRemoveItem = (id: number) => {
  //   setWishlist(wishlist.filter((item) => item.id !== id));
  // };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Your Wishlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <WishListCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WishListPage;
