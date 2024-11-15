// import { SiteLinksData } from '@/data/siteLinks'
import Link from 'next/link'
import React from 'react'
// import SocialMedia from './socialMedia'
import getInTouch from "../../public/getInTouchImage.svg"
import Image from 'next/image'
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
function Footer() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Instagram",
            icon: (
                <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <CiLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];

    const year = new Date().getFullYear();

    return (
        <div>

            <FloatingDock
                // mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
            <footer className="flex items-end justify-center w-full min-h-full text-white bg-black">
                <div className="flex flex-col w-5/6 gap-20 py-10 lg:gap-40">
                    {/* <div className="flex w-full">
                    <h1 className="flex flex-col text-6xl font-medium tracking-wide sm:text-7xl md:text-8xl lg:text-9xl">
                        <span>Empower</span>
                        <span>Your Digital</span>
                        <span>Odyssey!</span>
                    </h1>

                    {/* <Image src={getInTouch} className="w-auto h-auto animate-spinner" priority={true} fetchPriority="high" quality={100} alt="GetInTouch" /> */}
                    {/* </div> */}

                    <div className="flex flex-col w-full gap-10">
                        <div className="w-full border-t rounded-full border-white/70"></div>

                        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                            <div className="flex flex-wrap items-center justify-center gap-6 font-medium">

                            </div>

                            {/* <SocialMedia /> */}

                        </div>

                        <div className="flex flex-col items-center justify-between gap-2 md:flex-row text-white/70">
                            <p className="text-sm font-light md:text-base">© {year} TheAtomicMedia, All rights reserved</p>
                            <p className="text-sm font-light md:text-base">Built By Harsh Sharma</p>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer