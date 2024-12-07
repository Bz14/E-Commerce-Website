"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import img1 from "@assets/dress1.jpg";
import { useRouter } from "next/navigation";

interface Product {
  image: StaticImageData | string;
  name: string;
  description: string;
}

const FeaturedCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  return (
    <motion.div
      className="w-72 h-96 bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
        <Image
          src={product.image || img1}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 p-2">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 overflow-hidden overflow-ellipsis line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => router.push("/products")}
            className="px-4 py-2 bg-primaryBrown text-white font-medium rounded-lg hover:bg-primaryHover transition duration-300"
          >
            Check Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
