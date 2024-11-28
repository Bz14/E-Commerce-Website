"use client";
import Image from "next/image";
import { ProductGallery } from "@globals/globals";

const ProductImageGallery = (product_gallery: ProductGallery[]) => {
  console.log(product_gallery);
  return (
    <div className="flex flex-col">
      <div className="border p-4">
        <Image
          src={product_gallery[0] && product_gallery[0].src}
          alt={product_gallery[0] && product_gallery[0].alt}
          className="w-full h-auto"
        />
      </div>
      <div className="flex gap-2 mt-4">
        {/* {product_gallery &&
          product_gallery.map((gallery, index) => (
            <Image
              key={index}
              src={gallery.src && gallery.src}
              alt={gallery && gallery.alt}
              className="w-16 h-16"
            />
          ))} */}
      </div>
    </div>
  );
};

export default ProductImageGallery;
