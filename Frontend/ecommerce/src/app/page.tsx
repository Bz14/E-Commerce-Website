"use client";
import HeroSection from "./Components/home_page/Hero_Section/hero_section";
import Featured from "./Components/home_page/Featured/featured";
import Brands from "./Components/home_page/Brands/brands";
import { PrimeReactProvider } from "primereact/api";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/store";
import { setAccessToken, setUser } from "@/app/store/slices/authSlice";
import { useEffect } from "react";
import { fetchFeaturedProducts } from "./store/slices/featuredProductSlice";
import { RootState } from "@/app/store";
import Categories from "./Components/home_page/Catagories/catagories";

function Home() {
  const dispatch: AppDispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.featuredProducts
  );
  const router = useRouter();
  const { accessToken, profile } = router;

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }
  if (profile) {
    dispatch(setUser(profile));
  }

  return (
    <PrimeReactProvider>
      <HeroSection />
      <Featured products={products} loading={loading} error={error} />
      <Brands />
      <Categories />
    </PrimeReactProvider>
  );
}

export default Home;
