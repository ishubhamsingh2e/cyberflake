import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

interface CardProps {
    title: string;
    price: number;
    discount: number;
    image: string;
    link: string;
    className?: string;
}

function Card({ title, price, discount, image, link, className }: CardProps) {
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
                <a href="#">
                    <h5 className="truncate-title-20 text-base tracking-tight lg:text-lg">
                        {title}
                    </h5>
                </a>
                <a href="#">
                    <h6 className="text-sm tracking-tighter text-slate-400 underline-offset-1 hover:text-primary hover:underline">
                        Razer
                    </h6>
                </a>
                <div className="mb-5 mt-2 flex items-center justify-between">
                    <p>
                        <span className="text-xl font-bold lg:text-3xl">
                            ₹
                            {Intl.NumberFormat("en-IN", {
                                maximumSignificantDigits: 3,
                            }).format(price)}
                        </span>
                        <span className="ml-1 text-sm line-through">
                            ₹
                            {Intl.NumberFormat("en-IN", {
                                maximumSignificantDigits: 3,
                            }).format(discount)}
                        </span>
                    </p>
                </div>
                <div className="flex justify-end gap-x-1">
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="flex-shrink shadow-sm"
                    >
                        <Icons.heart className="h-5 w-5" />
                    </Button>
                    <Button className="flex-grow text-xs shadow-sm lg:text-base">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
