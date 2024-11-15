import { FeaturesSectionDemo } from "@/components/Features";
import { RippleDemo } from "@/components/Hero";
import { NavbarDemo } from "@/components/Nav";
import { RetroGridDemo } from "@/components/Section";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black" >
     <NavbarDemo/>
      <RippleDemo/>
      <RetroGridDemo/>
      <FeaturesSectionDemo/>
    </div>
  )
}
