"use client"
import { FloatingNavDemo } from "@/components/navbar";
import { TypewriterEffectDemo } from "@/components/typewriter";
import BgImage from "@/components/BgImage";
import WhyUs from "@/components/whyUs";
import Service from "@/components/service";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Contact from "@/components/contact";
export default function Home() {
  return (
   <div className="h-fit overflow-x-hidden pb-10">
   
  <whyUs/>
  <BgImage/>
  <FloatingNavDemo />
  <TypewriterEffectDemo/>
  <Service/>
  <WhyUs/>
  <AboutUs/>
  {/* <Contact/> */}
  <Footer/>
  <Logo/>
   </div>
  );
}
