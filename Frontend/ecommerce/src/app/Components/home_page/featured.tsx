"use client";
import img1 from "@assets/dress1.jpg";
import img2 from "@assets/dress2.jpg";
import img3 from "@assets/dress3.jpg";

import { StaticImageData } from "next/image";
import FeaturedCard from "./featured_card";

type Product = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
};

const featured: Product[] = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    description: "A classic sneaker for everyday wear.",
    image: img1,
  },
  {
    id: 2,
    name: "Nike Air Force 1 '07",
    description: "A classic sneaker for everyday wear.",
    image: img2,
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    description: "A classic sneaker for everyday wear.",
    image: img3,
  },
];

const Featured = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 w-fit">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <FeaturedCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
