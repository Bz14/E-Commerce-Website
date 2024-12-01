"use client";
import Image from "next/image";
import { ProductImageGalleryProps } from "@globals/globals";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  gallery,
}) => {
  console.log("Gallery", gallery);
  return (
    <div className="flex flex-col p-5">
      <div className="border p-4 w-fit">
        <div className="bg-gray-200 flex items-center justify-between">
          <FaLeftLong className="ml-4 text-primaryBrown" />
          <Image
            src={gallery[0] && gallery[0].src}
            alt={gallery[0] && gallery[0].alt}
            className="border rounded-sm"
            width={400}
            height={600}
          />
          <FaRightLong className="mr-4 text-primaryBrown" />
        </div>
        <div className="flex flex-row justify-between mt-2">
          {gallery &&
            gallery.map((g, index) => (
              <Image
                key={index}
                src={g.src && g.src}
                alt={g && g.alt}
                className="w-16 h-16 rounded-sm bg-primaryBrown"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
