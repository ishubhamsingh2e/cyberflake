import React from "react";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import { UserNav } from "../user-account-nav";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import Navigation from "./navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import Search from "../search";
import { Cart } from "../cart";

function NavigationBar({ className }: { className?: string }) {
    return (
        <div className={cn("flex justify-between align-middle", className)}>
            <div className="flex items-center justify-center gap-x-16">
                <Link href="/">
                    <Icons.logo className="w-48 lg:w-56" />
                </Link>
            </div>
            <Navigation />
            <div className="flex items-center space-x-3">
                <div className="flex items-center lg:space-x-2">
                    <div className="hidden space-x-2 lg:flex">
                        <Search className="h-10 w-full lg:w-auto" />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    size={"icon"}
                                    className="h-10 w-10 shadow-sm"
                                >
                                    <Icons.bag className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="flex flex-col w-full px-1">
                                <SheetHeader>
                                    <SheetTitle>Your Cart</SheetTitle>
                                </SheetHeader>
                                <SheetDescription asChild>
                                    <Cart />
                                </SheetDescription>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <UserNav />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    size={"icon"}
                                    className="flex h-10 w-10 shadow-sm lg:hidden"
                                >
                                    <Icons.menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="background-wavy-white w-full">
                                <SheetHeader></SheetHeader>
                                <SheetDescription asChild>
                                    <div className="-mt-10 flex h-full flex-col justify-center gap-y-8">
                                        <div>
                                            <ul className="space-y-5 text-left">
                                                <li>
                                                    <Link
                                                        href={"#"}
                                                        className="text-4xl text-primary underline underline-offset-4"
                                                    >
                                                        Brands.
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={"#"}
                                                        className="text-4xl text-primary underline underline-offset-4"
                                                    >
                                                        PC Configurator.
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={"#"}
                                                        className="text-4xl text-primary underline underline-offset-4"
                                                    >
                                                        Info.
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={"#"}
                                                        className="text-4xl text-primary underline underline-offset-4"
                                                    >
                                                        Blog.
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={"#"}
                                                        className="text-4xl text-primary underline underline-offset-4"
                                                    >
                                                        Contact.
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-2">
                                            <h1 className="text-lg text-accent">
                                                Find us on
                                            </h1>
                                            <div className="flex">
                                                <div className="space-x-1">
                                                    <Button
                                                        variant={"outline"}
                                                        size={"icon"}
                                                        className="bg-slate-50 shadow-sm"
                                                    >
                                                        <Icons.facebook
                                                            strokeWidth={1.75}
                                                            className="w-6"
                                                        />
                                                    </Button>
                                                    <Button
                                                        variant={"outline"}
                                                        size={"icon"}
                                                        className="bg-slate-50 shadow-sm"
                                                    >
                                                        <Icons.instagram
                                                            strokeWidth={1.75}
                                                            className="w-6"
                                                        />
                                                    </Button>
                                                    <Button
                                                        variant={"outline"}
                                                        size={"icon"}
                                                        className="bg-slate-50 shadow-sm"
                                                    >
                                                        <Icons.twitter
                                                            strokeWidth={1.75}
                                                            className="w-6"
                                                        />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
