"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Icons } from "../icons";
import { apiClient } from "@/lib/api";

interface CategoriesProps {
    children: ReactNode;
}

export function Categories({ children }: CategoriesProps) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiClient.getCategories();
                setCategories(response.categories || []);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="w-full sm:w-3/4" side={"left"}>
                <SheetDescription asChild>
                    <div className="mt-12">
                        <ul className="space-y-4 text-2xl text-primary scroll-auto">
                            {categories.map((item, index) => (
                                <li
                                    className="w-full flex justify-between"
                                    key={index}
                                >
                                    {item.children.length <= 0 ? (
                                        <li
                                            className="w-full flex justify-between"
                                            key={index}
                                        >
                                            <Link
                                                className="group transition duration-300"
                                                href={"#"}
                                            >
                                                {item.name}
                                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-primary"></span>
                                            </Link>
                                        </li>
                                    ) : (
                                        <Sheet>
                                            <SheetTrigger asChild>
                                                <Link
                                                    className="group transition duration-300"
                                                    href={"#"}
                                                >
                                                    {item.name}
                                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-primary"></span>
                                                </Link>
                                            </SheetTrigger>
                                            <SheetContent
                                                className="w-full sm:w-3/4"
                                                side={"left"}
                                            >
                                                <SheetHeader>
                                                    {item.name}
                                                </SheetHeader>
                                                <SheetDescription asChild>
                                                    <div className="mt-12">
                                                        <ul className="space-y-4 text-2xl text-primary scroll-auto">
                                                            {item.children.map(
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
                                                                                item.name
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
                                    )}
                                    <Icons.linkArrow className="w-6 h-6" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}

function Navigation() {
    return (
        <nav className="hidden items-center xl:flex">
            <ul className="flex flex-wrap gap-x-1">
                <li>
                    <Categories>
                        <Button variant={"link"} className="text-md">
                            <span>CATEGORIES</span>
                        </Button>
                    </Categories>
                </li>
                <li>
                    <Button variant={"link"} className="text-md">
                        <span>BRANDS</span>
                    </Button>
                </li>
                <li>
                    <Button variant={"link"} className="text-md" disabled>
                        <span>PC CONFIGURATOR</span>
                    </Button>
                </li>
                <li>
                    <Button variant={"link"} className="text-md">
                        <span>ABOUT US</span>
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
