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
    id: 2,
    name: "Mini dress.",
    description:
      "A classic mini ware dress.A classic mini ware dress.A classic mini ware dress.",
    image: img2,
  },
  {
    id: 1,
    name: "Short sleeve dress.",
    description:
      "A colorful long dress. A colorful long dress.A colorful long dress. A colorful long dress.",
    image: img1,
  },
  {
    id: 3,
    name: "Bridal dress.",
    description:
      "A long bridal dress.A long bridal dress.A long bridal dress.A long bridal dress.",
    image: img3,
  },
];

const Featured = () => {
  return (
    <section className="bg-white py-12 text-primaryDark">
      <div className="container mx-auto px-4 w-fit">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="flex flex-col md:flex-row align-middle items-center md:justify-between space-y-10 md:space-x-10 align-center flex-wrap">
          {featured.map((product) => (
            <FeaturedCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
