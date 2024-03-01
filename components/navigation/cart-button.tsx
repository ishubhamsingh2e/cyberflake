"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { apiClient } from "@/lib/api";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { Cart } from "../cart";

function CartButton() {
    const [isEmpty, setISEmpty] = useState(true);

    useEffect(() => {
        apiClient.getCart().then((res) => {
            if (res.error) {
                setISEmpty(true);
            } else if (res.length === 0) setISEmpty(true);
            else setISEmpty(false);
        });
    }, []);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="relative">
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="h-10 w-10 shadow-sm"
                    >
                        <Icons.bag className="h-6 w-10 hover:border-none" />
                    </Button>
                    {isEmpty ? null : (
                        <div className="absolute -top-1 -right-1">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                            </span>
                        </div>
                    )}
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
    );
}

export default CartButton;
