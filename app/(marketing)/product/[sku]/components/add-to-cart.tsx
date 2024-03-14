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
            console.error("Error adding to cart:", error);
        }
    }

    const handleDigitChange = (newValue: number) => {
        setDigitValue(newValue);
    };

    const isOutOfStock = inventory <= 0;

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
                        <p className="text-md font-semibold text-primary/80">
                            {isOutOfStock ? (
                                <>
                                    <>
                                        <span className="text-red-500">
                                            Out Of Stock
                                        </span>
                                    </>{" "}
                                    <br /> We will restock it as soon as posible
                                </>
                            ) : (
                                <>
                                    Only{" "}
                                    <span className="text-md text-primary">
                                        {inventory} items
                                    </span>{" "}
                                    left!
                                    <br />
                                    Don't miss it
                                </>
                            )}
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
                    {/* Disable the buttons if inventory is zero or negative */}
                    <Button
                        variant={"outline"}
                        className={`h-full w-full rounded-lg shadow-sm ${isOutOfStock ? "cursor-not-allowed opacity-50" : ""}`}
                        onClick={() => {
                            if (!isOutOfStock) {
                                addToCart(id, digitValue).then((res: any) => {
                                    if (!res.error) {
                                        toast({
                                            title: "Cart",
                                            description:
                                                "Product added to cart",
                                        });
                                    } else {
                                        toast({
                                            title: "Cart",
                                            variant: "destructive",
                                            description: res.error,
                                        });
                                    }
                                });
                            }
                        }}
                        disabled={isOutOfStock}
                    >
                        <Icons.bag className="mr-2 h-6 w-6" /> Add To Cart
                    </Button>

                    <Button
                        className={`h-full w-full rounded-lg shadow-sm ${isOutOfStock ? "cursor-not-allowed opacity-50" : ""}`}
                        disabled={isOutOfStock}
                    >
                        <Icons.bag className="mr-2 h-6 w-6" />
                        Buy Now
                    </Button>
                </div>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="h-auto w-auto flex-shrink p-3 shadow-sm"
                    onClick={() => {
                        apiClient.addToWishlist(id).then((res) => {
                            if (res) {
                                toast({
                                    title: "Wishlist",
                                    description: res.message,
                                });
                            } else {
                                toast({
                                    title: "Wishlist",
                                    variant: "destructive",
                                    description:
                                        "product can't be added due to some error, maybe it already in wishlist?",
                                });
                            }
                        });
                    }}
                >
                    <Icons.heart className="h-6 w-6" />
                </Button>
            </div>
        </>
    );
}

export default AddToCart;
