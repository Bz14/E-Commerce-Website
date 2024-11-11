import Image from "next/image";
import heroImage from "@assets/image0_0-removebg-preview (1).png";

const HeroSection = () => {
  return (
    <div className="relative bg-primaryBrown min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center p-6 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Get your favorite products at your doorstep
        </h1>
        <p className="text-lg text-white mb-6">
          Shop from a wide range of products from the comfort of your home
        </p>
        <button className="px-6 py-3 bg-primaryDark text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition duration-300">
          Shop Now
        </button>
      </div>
      <div>
        <Image src={heroImage} alt="Hero Image" width={700} />
      </div>
    </div>
  );
};

export default HeroSection;
