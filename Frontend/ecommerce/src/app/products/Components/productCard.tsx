"use client";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

type Product = {
  id: number;
  img: { src: string };
  name: string;
  price: string;
  rating: number;
  tags: string[];
};

const ProductCard = ({ img, name, price, rating, tags }: Product) => {
  return (
    <div
      className="relative bg-cover bg-center shadow-lg rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-300">{price}</p>
        <div className="flex items-center justify-center gap-1 my-2">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`${
                i < Math.round(rating) ? "text-yellow-400" : "text-gray-500"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-green-100 text-green-700 py-1 px-2 rounded-full"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="flex justify-end">
          <Link
            href="/product-detail"
            className=" bg-primaryBrown text-white py-2 px-4 rounded hover:bg-primaryHover mt-20"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
