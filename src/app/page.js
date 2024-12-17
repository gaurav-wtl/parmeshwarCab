import About from "@/app/components/About";
import BookCabSection from "@/app/components/BookCabSection";
import CabOffers from "@/app/components/CabOffer";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import Milestone from "@/app/components/Milestone";
import Navbar from "@/app/components/Navbar";
import SelectCar from "@/app/components/SelectCar";
import Services from "@/app/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <BookCabSection />
      <About />
      <Milestone />
      <Services />
      <CabOffers />
      <Footer />
      {/* <SelectCar /> */}
    </>
  );
}
