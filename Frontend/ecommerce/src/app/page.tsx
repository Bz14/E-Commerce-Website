"use client";
import HeroSection from "./Components/home_page/Hero_Section/hero_section";
import Featured from "./Components/home_page/Featured/featured";
import Brands from "./Components/home_page/Brands/brands";
import { PrimeReactProvider } from "primereact/api";

const Home = () => {
  return (
    <PrimeReactProvider>
      <HeroSection />
      <Featured />
      <Brands />
    </PrimeReactProvider>
  );
};

export default Home;
