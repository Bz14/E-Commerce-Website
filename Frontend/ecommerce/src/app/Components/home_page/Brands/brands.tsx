"use client";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Image from "next/image";
import brand1 from "../../../../../public/assets/brand1.png";

import { StaticImageData } from "next/image";

type Brand = {
  name: string;
  logo: StaticImageData;
};

const brands: Brand[] = [
  { name: "Brand 1", logo: brand1 },
  { name: "Brand 2", logo: brand1 },
  { name: "Brand 3", logo: brand1 },
  { name: "Brand 4", logo: brand1 },
  { name: "Brand 5", logo: brand1 },
];

const Brands = () => {
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const brandTemplate = (brand: { name: string; logo: string }) => {
    return (
      <div className="p-4">
        <div className="bg-primaryBrown p-6 rounded-lg shadow-lg flex items-center justify-center">
          <Image
            src={brand.logo}
            alt={brand.name}
            className="h-24"
            width={100}
            height={100}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="py-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Popular Brands
      </h2>
      <Carousel
        value={brands}
        itemTemplate={brandTemplate}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        autoplayInterval={3000}
        circular
        showIndicators
      />
    </div>
  );
};

export default Brands;
