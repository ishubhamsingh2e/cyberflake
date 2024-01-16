import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import CartCard from "./cart-card";

function NavigationMobile() {
    return (
        <div className="fixed bottom-0 z-40 flex w-screen justify-center border-t bg-slate-50 py-3 lg:hidden">
            <div className="flex w-4/5 justify-between">
                <div className="flex flex-col items-center">
                    <Button variant={"ghost"} size={"icon"} asChild>
                        <Link href={"/"}>
                            <Icons.home className="h-6 w-6" />
                        </Link>
                    </Button>
                    <span className="text-sm">Home</span>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="flex flex-col items-center">
                            <Button variant={"ghost"} size={"icon"}>
                                <Icons.category className="h-6 w-6" />
                            </Button>
                            <span className="text-sm">category</span>
                        </div>
                    </SheetTrigger>
                    <SheetContent className="h-full w-full">
                        <SheetDescription
                            className="h-full items-center"
                            asChild
                        >
                            <ScrollArea className="py-5">
                                <ul className="space-y-6 text-center">
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            ACCESSORIES
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            CABINET FANS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            KEYBOARD/MOUSE COMBO
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            MOUSE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            MOUSEPAD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            PROCESSOR
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            SSD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            ROUTERS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            ACCESSORIES
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            CABINET FANS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            KEYBOARD/MOUSE COMBO
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            MOUSE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            MOUSEPAD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            PROCESSOR
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            SSD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={"#"}
                                            className="text-3xl text-primary"
                                        >
                                            ROUTERS
                                        </Link>
                                    </li>
                                </ul>
                            </ScrollArea>
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="flex flex-col items-center">
                            <Button variant={"ghost"} size={"icon"}>
                                <Icons.bag className="h-6 w-6" />
                            </Button>
                            <span className="text-sm">Cart</span>
                        </div>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col w-full px-1">
                        <SheetHeader>
                            <SheetTitle>Your Cart</SheetTitle>
                        </SheetHeader>
                        <SheetDescription className="flex" asChild>
                            <div className="flex justify-between flex-col flex-grow gap-2">
                                <div className="grow overflow-y-scroll">
                                    <ScrollArea>
                                            <CartCard />
                                            <CartCard />
                                            <CartCard />
                                            <CartCard />
                                            <CartCard />
                                            <CartCard />
                                    </ScrollArea>
                                </div>
                                <div className="shrink">
                                    <Button className="w-full h-12">
                                        Check Out
                                    </Button>
                                </div>
                            </div>
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default NavigationMobile;
