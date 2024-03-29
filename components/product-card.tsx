"use client";

import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { apiClient } from "@/lib/api";

import { useToast } from "@/components/ui/use-toast";

interface CardProps {
    id: number;
    title: string;
    brand: string;
    price: number;
    discount: number;
    image: string;
    link: string;
    className?: string;
    wishlist?: boolean;
    deleteWishlist?: boolean;
}

function Card({
    id,
    title,
    brand,
    price,
    discount,
    image,
    link,
    className,
    wishlist = true,
    deleteWishlist = false,
}: CardProps) {
    const { toast } = useToast();

    return (
        <div
            className={cn(
                "group flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-card justify-between min-w-full max-h-fit",
                className,
            )}
        >
            <a
                className="relative mx-1 mt-1 flex aspect-square overflow-hidden rounded-sm md:mx-3 md:mt-3 lg:rounded-xl"
                href={link}
            >
                <img
                    className="w-full object-cover"
                    src={image}
                    alt="product image"
                />
            </a>
            <div className="mt-2 px-2 pb-2 md:mt-4 md:px-5 md:pb-5">
                <a href={link}>
                    <h5 className="truncate-title-20 text-base tracking-tight lg:text-lg">
                        {title}
                    </h5>
                </a>
                <a href={`/brand/${brand}`}>
                    <h6 className="text-sm tracking-tighter text-slate-400 underline-offset-1 hover:text-primary hover:underline">
                        {brand}
                    </h6>
                </a>
                <div className="mb-5 mt-2 flex items-center justify-between">
                    <p>
                        <span className="text-xl font-bold lg:text-3xl">
                            ₹{Intl.NumberFormat("en-IN").format(price)}
                        </span>
                        <span className="ml-1 text-sm line-through">
                            ₹{Intl.NumberFormat("en-IN").format(discount)}
                        </span>
                    </p>
                </div>
                <div className="flex justify-end gap-x-1">
                    {wishlist ? (
                        <Button
                            variant={"outline"}
                            size={"icon"}
                            className="flex-shrink shadow-sm"
                            onClick={() => {
                                apiClient.addToWishlist(id).then((res) => {
                                    if (res.message) {
                                        toast({
                                            title: "Wishlist",
                                            description: res.message,
                                        });
                                    } else {
                                        toast({
                                            title: "Wishlist",
                                            variant: "destructive",
                                            description:
                                                "product can't be added doue to some error",
                                        });
                                    }
                                });
                            }}
                        >
                            <Icons.heart className="h-5 w-5" />
                        </Button>
                    ) : null}
                    <Button
                        className="flex-grow text-xs shadow-sm lg:text-base"
                        onClick={() => {
                            apiClient.addToCart(id, 1).then((res) => {
                                if (res.message) {
                                    toast({
                                        title: "Cart",
                                        description: res.message,
                                    });
                                } else {
                                    toast({
                                        title: "Cart",
                                        variant: "destructive",
                                        description:
                                            "product can't be added due to some error",
                                    });
                                }
                            });
                        }}
                    >
                        Add to Cart
                    </Button>
                    {deleteWishlist ? (
                        <Button
                            variant={"outline"}
                            size={"icon"}
                            className="flex-shrink shadow-sm bg-destructive text-slate-100 border-none"
                            onClick={() => {
                                apiClient.deleteWishlist(id).then((res) => {
                                    if (res.message) {
                                        toast({
                                            title: "Wishlist",
                                            description: res.message,
                                        });
                                    } else if (res.error) {
                                        toast({
                                            title: "Wishlist",
                                            variant: "destructive",
                                            description: res.error,
                                        });
                                    } else {
                                        toast({
                                            title: "Wishlist",
                                            variant: "destructive",
                                            description:
                                                "product can't be added doue to some error",
                                        });
                                    }
                                });
                            }}
                        >
                            <Icons.trash className="h-5 w-5" />
                        </Button>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Card;
