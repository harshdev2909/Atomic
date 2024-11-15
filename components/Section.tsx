"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { WavyBackground } from "./ui/wavy-background";
export function RetroGridDemo() {
  return (
    <div className="relative mt-10px bg-black mb-15  flex h-full w-full flex-col items-center   rounded-lg ">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
      Our Services
      </span>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
export const projects = [
    {
      title: "Website & App Development",
      description:
        "We offer comprehensive website and mobile app development services tailored to meet your business needs. ",
      link: "",
    },
    {
      title: "SEO Services",
      description:
        "Our SEO services are designed to enhance your website's visibility, improve search engine rankings, and attract targeted traffic.",
      link: "",
    },
    {
      title: "Social Brand Management",
      description:
        "Our social brand management services are designed to enhance your brand's reputation, foster engagement, and build a loyal following. ",
      link: "",
    },
    {
      title: "Meta & Google Ads",
      description:
        "We specialize in creating and managing Meta (Facebook) and Google Ads campaigns that deliver measurable results.",
      link: "",
    },
    {
      title: "Business Development",
      description:
        "Our business development services are designed to identify new growth opportunities, create strategic partnerships, and drive your business forward.",
      link: "",
    },
    {
      title: "3D Design & Creatives",
      description:
        "We specialize in creating high-quality 3D designs and creative visuals that elevate your brand and captivate your audience.",
      link: "",
    },
  ];