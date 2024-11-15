import { FeaturesSectionDemo } from "@/components/Features";
import Footer from "@/components/Footer";
import { RippleDemo } from "@/components/Hero";
import { NavbarDemo } from "@/components/Nav";
import { MarqueeDemo } from "@/components/Review";
import { RetroGridDemo } from "@/components/Section";
import { ShineBorderDemo } from "@/components/Stats";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black" >
     <NavbarDemo/>
      <RippleDemo/>
      <RetroGridDemo/>
      <FeaturesSectionDemo/>
      {/* <ShineBorderDemo/> */}
      <MarqueeDemo/>
      <Footer/>
    </div>
  )
}
