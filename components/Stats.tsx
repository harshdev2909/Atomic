import ShineBorder from "@/components/ui/shine-border";

export function ShineBorderDemo() {
  return (
    <div className="bg-black h-[500px] justify-center items-center">
    <ShineBorder
      className=" relative flex h-[200px] w-[50px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b  bg-clip-text text-center text-8xl font-semibold leading-none text-transparent from-white to-slate-900/10">
        Shine Border.
      </span>
    </ShineBorder>
    </div>
  );
}
