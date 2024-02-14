import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { Cart } from "@/components/cart";
import { Categories } from "./navigation";

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
                <Categories>
                    <div className="flex flex-col items-center">
                        <Button variant={"ghost"} size={"icon"}>
                            <Icons.category className="h-6 w-6" />
                        </Button>
                        <span className="text-sm">category</span>
                    </div>
                </Categories>
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
                        <SheetDescription asChild>
                            <Cart />
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default NavigationMobile;
