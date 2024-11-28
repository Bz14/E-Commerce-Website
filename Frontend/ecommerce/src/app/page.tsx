"use client";
import HeroSection from "./Components/home_page/Hero_Section/hero_section";
import Featured from "./Components/home_page/Featured/featured";
import Brands from "./Components/home_page/Brands/brands";
import { PrimeReactProvider } from "primereact/api";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAccessToken, setUser } from "@/app/store/slices/authSlice";

const Home = () => {
  const router = useRouter();
  const { accessToken, profile } = router;
  const dispatch = useDispatch();
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }
  if (profile) {
    dispatch(setUser(profile));
  }

  return (
    <PrimeReactProvider>
      <HeroSection />
      <Featured />
      <Brands />
    </PrimeReactProvider>
  );
};

export default Home;
