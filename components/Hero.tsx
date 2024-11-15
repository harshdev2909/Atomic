import Ripple from "./ui/ripple";
import SparklesText from "./ui/sparkles-text";
import BoxReveal from "./ui/box-reveal";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "./ui/animated-gradient-text";

export function RippleDemo() {
  return (
    <div className="relative bg-black flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div >
        {/* <NavbarDemo/> */}
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <SparklesText text="Atomic Media" />
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 
            <span className="font-semibold text-[#5046e6]"> Building Digital Product, Brand and Experience</span>, 
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
          Let's Atomic
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
      <Ripple />
    </div>
  );
}
