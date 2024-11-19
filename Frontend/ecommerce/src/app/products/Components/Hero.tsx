import shoe1 from "@assets/shoe/shoe1.png";
import dress1 from "@assets/dress/dress2.png";
import HeroContainer from "../Components/Hero_container";

const Hero = () => {
  return (
    <div className="flex flex-wrap gap-4 p-8">
      <HeroContainer
        img={shoe1}
        header="Extra 50% Off"
        description="Shop our latest collection and get exclusive discounts."
        btnTxt="Shop Now"
        bgcolor="bg-white"
        btnColor="bg-primaryBrown"
        textColor="text-white"
      />
      <HeroContainer
        img={dress1}
        header="Best Sellers"
        description="Discover the best-selling products trending right now."
        btnTxt="Explore"
        bgcolor="bg-primaryBrown"
        btnColor="bg-white"
        textColor="text-primaryDark"
      />
    </div>
  );
};

export default Hero;
