import { RippleDemo } from "@/components/Hero";
import { NavbarDemo } from "@/components/Nav";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
     <NavbarDemo/>
      <RippleDemo/>
      
    </div>
  )
}
