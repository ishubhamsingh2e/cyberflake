import React from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";

function CartCard() {
    return (
        <div className="relative flex rounded-md shadow bg-slate-100 space-x-1 py-1 px-1">
            <img
                className="object-cover rounded mr-1"
                src="https://placehold.co/100"
                alt="product-1"
            />
            <div className="grow flex flex-col gap-1">
                <h2>Intel</h2>
                <h1 className="font-semibold text-sm truncate-title-20">
                    Intel Core™ i9-13900K(24 CORES(16 E-cores/8 P-cores/32
                    THREADS), 32M Cache, 5.80 GHz Max) Processor
                </h1>
                <div className="flex gap-1 items-baseline">
                    <span className="font-normal text-base">₹64,000</span>
                    <span className="font-normal text-sm text-slate-400 line-through">
                        ₹64,000
                    </span>
                </div>
                <div>
                    <span className="font-bold text-sm">Quantity:</span>{" "}
                    <span>1</span>
                </div>
            </div>
            <Button
                className="absolute top-0 right-0 h-8 w-8"
                size={"icon"}
                variant={"ghost"}
            >
                <Icons.close className="w-5 h-5" />
            </Button>
        </div>
    );
}

export default CartCard;
