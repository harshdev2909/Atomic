import Ripple from "./ui/ripple";
import SparklesText from "./ui/sparkles-text";
import BoxReveal from "./ui/box-reveal";
export function RippleDemo() {
  return (
    <div className="relative bg-black flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div >
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
      <Ripple />
    </div>
  );
}
