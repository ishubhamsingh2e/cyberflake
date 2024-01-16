import React from "react";
import { Button } from "./ui/button";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import { Icons } from "./icons";

const catu = [
    "ACCESSORIES",
    "CABINET FANS",
    "KEYBOARD/MOUSE COMBO",
    "MOUSE",
    "MOUSEPAD",
    "PROCESSOR",
    "SSD",
    "ROUTERS",
    "ACCESSORIES",
    "CABINET FANS",
    "KEYBOARD/MOUSE COMBO",
    "MOUSE",
    "MOUSEPAD",
    "PROCESSOR",
    "SSD",
    "ROUTERS",
];

function Navigation() {
    return (
        <nav className="hidden items-center xl:flex">
            <ul className="flex flex-wrap gap-x-1">
                <li>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={"link"} className="text-md">
                                <span>Category</span>
                            </Button>
                        </SheetTrigger>{" "}
                        <SheetContent side={"left"}>
                            <SheetDescription>
                                <div className="mt-12">
                                    <ul className="space-y-4 text-2xl text-primary scroll-auto">
                                        {catu.map((item, index) => (
                                            <li
                                                className="w-full flex justify-between"
                                                key={index}
                                            >
                                                <Sheet>
                                                    <SheetTrigger asChild>
                                                        <Link
                                                            className="group transition duration-300"
                                                            href={"#"}
                                                        >
                                                            {item}
                                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-primary"></span>
                                                        </Link>
                                                    </SheetTrigger>
                                                    <SheetContent side={"left"}>
                                                        <SheetHeader>
                                                            Categorys
                                                        </SheetHeader>
                                                        <SheetDescription>
                                                            <div className="mt-12">
                                                                <ul className="space-y-4 text-2xl text-primary scroll-auto">
                                                                    {catu.map(
                                                                        (
                                                                            item,
                                                                            index,
                                                                        ) => (
                                                                            <li
                                                                                className="w-full flex justify-between"
                                                                                key={
                                                                                    index
                                                                                }
                                                                            >
                                                                                <Link
                                                                                    className="group transition duration-300"
                                                                                    href={
                                                                                        "#"
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        item
                                                                                    }
                                                                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-primary"></span>
                                                                                </Link>
                                                                                <Icons.linkArrow className="w-6 h-6" />
                                                                            </li>
                                                                        ),
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </SheetDescription>
                                                    </SheetContent>
                                                </Sheet>
                                                <Icons.linkArrow className="w-6 h-6" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </li>
                <li>
                    <Button variant={"link"} className="text-md">
                        <span>Brands</span>
                    </Button>
                </li>
                <li>
                    <Button variant={"link"} className="text-md">
                        <span>PC Configurator</span>
                    </Button>
                </li>
                <li>
                    <Button variant={"link"} className="text-md">
                        <span>Info</span>
                    </Button>
                </li>
                <li>
                    <Button variant={"link"} className="text-md">
                        <span>Blog</span>
                    </Button>
                </li>
                <li>
                    <Button variant={"link"} className="text-md">
                        <span>Contact</span>
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
