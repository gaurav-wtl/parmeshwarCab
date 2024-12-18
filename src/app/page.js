'use client'
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
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Load the WhatsApp widget script on component mount
    const script = document.createElement("script");
    script.src = "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Set up the WhatsApp widget once the script is loaded
    script.onload = () => {
      const wa_btnSetting = {
        btnColor: "#16BE45",
        ctaText: "",
        cornerRadius: 150,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        btnPosition: "right", // Position it on the right side
        whatsAppNumber: "+919209592920", // Your WhatsApp number
        welcomeMessage: "Hello",
        zIndex: 999999,
        btnColorScheme: "light",
      };
      window._waEmbed(wa_btnSetting);
    };

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

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

      {/* WhatsApp and Call Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-between p-4">
        {/* Call Button (Left) */}
        <a
          href="tel:09209592920"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <i className="bx bxs-phone-call text-3xl"></i>
        </a>

        
      </div>


    </>
  );
}
