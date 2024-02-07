import React from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import footerData from "@/config/footer";

function Footer({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col gap-y-2 lg:gap-y-5", className)}>
            <div className="background-wavy grid-cols-2 justify-between gap-x-12 rounded-lg px-6 py-16 lg:mb-12 lg:grid lg:px-12 lg:py-28">
                <div className="space-y-5 lg:space-y-16">
                    <h1 className="text-4xl font-bold text-slate-800 lg:text-6xl">
                        Not Sure of what right for you?
                    </h1>
                    <div className="block lg:hidden">
                        <p className="text-md text-slate-500 lg:text-xl">
                            Unlocking Excellence in Every Pixel: Meet our
                            Cyberflake Crew for All Your Business Brilliance!
                            🌐✨ We&apos;re not just a team; we&apos;re your
                            digital dream weavers, crafting success with every
                            keystroke. Join forces with us, and let&apos;s
                            cyber-sizzle your business to new heights! 🔥🚀
                            #CyberflakeCrew #BusinessBrilliance
                        </p>
                    </div>
                    <button className="relative h-28 w-full rounded-md border bg-primary pl-4 pt-16 text-left text-slate-50 shadow-elevated transition duration-500 ease-in-out hover:bg-primary/90 lg:w-64">
                        <Icons.arrowRightTop className="absolute right-0 top-0 mr-2 mt-2 h-8 w-8" />
                        Let&apos;s Chat
                    </button>
                </div>
                <div className="hidden lg:block">
                    <p className="text-lg text-slate-500 lg:text-xl">
                        Unlocking Excellence in Every Pixel: Meet our Cyberflake
                        Crew for All Your Business Brilliance! 🌐✨ We&apos;re
                        not just a team; we&apos;re your digital dream weavers,
                        crafting success with every keystroke. Join forces with
                        us, and let&apos;s cyber-sizzle your business to new
                        heights! 🔥🚀 #CyberflakeCrew #BusinessBrilliance
                    </p>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-between space-y-10 xl:mt-0 xl:flex-row xl:space-y-0">
                <div className="lg:flex-shrink">
                    <Icons.logo className="w-56 lg:w-80" />
                </div>
                <div className="flex flex-grow gap-x-4 text-center leading-tight lg:ml-12 lg:justify-start lg:gap-x-16 lg:text-left">
                    {footerData.map((item, index) => (
                        <div key={index}>
                            <h1 className="mb-2 text-xl font-semibold text-primary">
                                {item.title}
                            </h1>
                            <ul className="flex flex-col gap-y-2 text-sm">
                                {item.url.map((url, index) => (
                                    <li
                                        className="cursor-pointer text-slate-800 underline-offset-1 transition duration-300 ease-in-out hover:text-accent hover:underline"
                                        key={index}
                                    >
                                        {url.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex w-full flex-col gap-x-2 space-y-2 xl:mt-0 xl:flex-shrink xl:flex-row xl:justify-center xl:space-y-0">
                    <button className="relative h-28 w-full rounded-md border bg-primary pl-4 pt-16 text-left text-slate-50 shadow-elevated transition duration-500 ease-in-out hover:bg-primary/90 xl:w-64">
                        <Icons.arrowRightTop className="absolute right-0 top-0 mr-2 mt-2 h-8 w-8" />
                        Bulk Order
                    </button>
                    <button className="relative h-28 w-full rounded-md border bg-primary pl-4 pt-16 text-left text-slate-50 shadow-elevated transition duration-500 ease-in-out hover:bg-primary/90 xl:w-64">
                        <Icons.arrowRightTop className="absolute right-0 top-0 mr-2 mt-2 h-8 w-8" />
                        Business Order
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Footer;
