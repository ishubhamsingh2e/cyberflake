"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DigitInput } from "@/components/ui/digit-input";
import { apiClient } from "@/lib/api";
import React, { useState } from "react";

import { useToast } from "@/components/ui/use-toast";

interface AddToCartProps {
    id: number;
    inventory: number;
}

function AddToCart({ id, inventory }: AddToCartProps) {
    const [digitValue, setDigitValue] = useState<number>(1);

    const { toast } = useToast();

    async function addToCart(id: number, quantity: number) {
        try {
            const res = await apiClient.addToCart(id, quantity);
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    }

    const handleDigitChange = (newValue: number) => {
        setDigitValue(newValue);
    };

    return (
        <>
            <div className="space-y-6">
                <div className="space-y-3">
                    <div className="flex gap-x-6">
                        <div>
                            <DigitInput
                                value={digitValue}
                                onDigitChange={handleDigitChange}
                            />
                        </div>
                        <p className="text-md font-semibold text-slate-500">
                            Only{" "}
                            <span className="text-md text-primary">
                                {inventory} items
                            </span>{" "}
                            left!
                            <br />
                            Don't miss it
                        </p>
                    </div>
                    <div className="w-fit">
                        <a
                            className="flex items-center gap-x-1 underline-offset-1 hover:underline"
                            href="#"
                        >
                            Bulk Order <Icons.link className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-2">
                <div className="grid flex-grow grid-cols-2 gap-2">
                    <Button
                        variant={"outline"}
                        className="h-full w-full rounded-lg shadow-sm"
                        onClick={() => {
                            addToCart(id, digitValue).then((res: any) => {
                                if (!res.error) {
                                    toast({
                                        title: "Cart",
                                        description: "product added to cart",
                                    });
                                } else {
                                    toast({
                                        title: "Cart",
                                        variant: "destructive",
                                        description: res.error,
                                    });
                                }
                            });
                        }}
                    >
                        <Icons.bag className="mr-2 h-6 w-6" /> Add To Cart
                    </Button>
                    <Button className="h-full w-full rounded-lg shadow-sm">
                        <Icons.bag className="mr-2 h-6 w-6" />
                        Buy Now
                    </Button>
                </div>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="h-auto w-auto flex-shrink p-3 shadow-sm"
                >
                    <Icons.heart className="h-6 w-6" />
                </Button>
            </div>
        </>
    );
}

export default AddToCart;
