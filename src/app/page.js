import About from "@/components/About";
import BookCabSection from "@/components/BookCabSection";
import CabOffers from "@/components/CabOffer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Milestone from "@/components/Milestone";
import Navbar from "@/components/Navbar";
import SelectCar from "@/components/SelectCar";
import Services from "@/components/Services";
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
