import Ripple from "./ui/ripple";
import SparklesText from "./ui/sparkles-text";
import BoxReveal from "./ui/box-reveal";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "./ui/animated-gradient-text";

 
export function RippleDemo() {
  return (
    <div className="relative bg-black flex h-[800px] w-full flex-col items-center justify-center overflow-hidden  ">
      <div>
        {/* <NavbarDemo/> */}
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <SparklesText text="Atomic Media" />
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 
            <span className="font-semibold text-[#5046e6]"> Building Digital Product, Brand and Experience.</span>
            . 
          </p>
        </div>
      </BoxReveal>
      </div>
      <div className="z-10 flex min-h-64 items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Contact us
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
    <div className="mb-3 sm:p-0 px-4 w-full group relative items-center mt-2">
          <h1
          // ref={titleRef}
          className="text-white lg:text-[60px] sm:text-[40px] text-[20px] font-extrabold text-center"
          >
          we specialize in
          <span className="relative text-[#E4003A] my-0 mx-[15px] inline-block">
            <span className="absolute top-0 left-0 w-full h-full bg-[#E4003A] opacity-10 -rotate-1"></span>
            designing, 
          </span>
          building,
          <span className="relative text-[#AF47D2] my-0 mx-[15px] inline-block">
            <span className="absolute top-0 left-0 w-full h-full bg-[#AF47D2] opacity-10 rotate-3"></span>
            shaping and scaling.
          </span>
          </h1>
          </div>
      
      <Ripple />
    </div>
  );
}
