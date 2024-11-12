import Image from "next/image";
import heroImage from "@assets/image0_0-removebg-preview (1).png";

const HeroSection = () => {
  return (
    <div className="relative bg-primaryBrown min-h-screen flex flex-col items-center justify-center md:flex-row">
      <div className="relative z-10 text-center p-6 max-w-lg mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Get your favorite products at your doorstep
        </h1>
        <p className="text-base md:text-lg text-white mb-6">
          Shop from a wide range of products from the comfort of your home
        </p>
        <button className="px-4 py-2 md:px-6 md:py-3 bg-primaryDark text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition duration-300">
          Shop Now
        </button>
      </div>
      <div className="mt-6 md:mt-0">
        <Image src={heroImage} alt="Hero Image" width={700} height={350} />
      </div>
    </div>
  );
};

export default HeroSection;
