"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import img1 from "@assets/dress1.jpg";

interface Product {
  image: StaticImageData | string;
  name: string;
  description: string;
}

const FeaturedCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <motion.div
        className="bg-primaryDark p-6 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image src={product.image || img1} alt="Featured Product" width={300} />
        <h3 className="text-xl text-white font-semibold mb-2 mt-2">
          {product.name}
        </h3>
        <p className="text-white mb-4 whitespace-nowrap">
          {product.description}
        </p>
        <button className="px-4 py-2 bg-primaryBrown text-white font-semibold rounded-lg shadow-md hover:bg-primaryHover transition duration-300">
          Check Now
        </button>
      </motion.div>
    </div>
  );
};

export default FeaturedCard;
