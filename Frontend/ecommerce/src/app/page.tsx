"use client";
import HeroSection from "./Components/home_page/Hero_Section/hero_section";
import Featured from "./Components/home_page/Featured/featured";
import Brands from "./Components/home_page/Brands/brands";
import { PrimeReactProvider } from "primereact/api";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import Categories from "./Components/home_page/Catagories/catagories";
import Testimonials from "./Components/Testimonials/testimonials";
import Newsletter from "./Components/Newsletter/news_letter";
import ProductOfTheWeek from "./Components/Product/product";
import HowToUse from "./Components/HowToUse/how_to_use";

function Home() {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.featuredProducts
  );

  return (
    <PrimeReactProvider>
      <HeroSection />
      <Featured products={products} loading={loading} error={error} />
      <Brands />
      <Categories />
      <Testimonials />
      <Newsletter />
      <ProductOfTheWeek />
      <HowToUse />
    </PrimeReactProvider>
  );
}

export default Home;
