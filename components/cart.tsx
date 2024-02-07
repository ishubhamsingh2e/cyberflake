"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { CartData } from "@/config/cart";
import { Product } from "@/types/types";
import { cn } from "@/lib/utils";

interface CartCardProps {
    product: Product;
    onDelete: (product: Product) => void;
}

export function Card({ product, onDelete }: CartCardProps) {
    const { name, description, image, price, discountPrice, quantity } =
        product;

    return (
        <div className="relative flex rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-slate-50 space-x-1 py-1 px-1">
            <img className="object-cover rounded mr-1" src={image} alt={name} />
            <div className="grow flex flex-col gap-1">
                <h2>{name}</h2>
                <h1 className="font-semibold text-sm truncate-title-20">
                    {description}
                </h1>
                <div className="flex gap-1 items-baseline">
                    <span className="font-normal text-base">
                        ₹{discountPrice || price}
                    </span>
                    {discountPrice && (
                        <span className="font-normal text-sm text-slate-400 line-through">
                            ₹{price}
                        </span>
                    )}
                </div>
                <div>
                    <span className="font-bold text-sm">Quantity:</span>{" "}
                    <span>{quantity}</span>
                </div>
            </div>
            <Button
                className="absolute top-0 right-0 h-8 w-8"
                size={"icon"}
                variant={"ghost"}
                onClick={() => onDelete(product)}
            >
                <Icons.close className="w-5 h-5" />
            </Button>
        </div>
    );
}

export function Cart() {
    return (
        <div className="h-full">
            <CartItems className="h-[80%] max-h-[80%]" />
            <div className="h-[20%] flex place-items-stretch flex-col p-4 space-y-1 md:space-y-2">
                <div className="flex justify-between w-full">
                    <span className="text-xl md:text-2xl">Total</span>
                    <span className="text-xl md:text-2xl">₹100</span>
                </div>
                <div className="text-slate-400 text-xs md:text-sm">
                    Tax included and shipping calculated at checkout
                </div>
                <Button className="w-full h-12">Check Out</Button>
            </div>
        </div>
    );
}

interface CartItemsProps {
    className?: string;
}

export function CartItems({ className }: CartItemsProps) {
    const fetchCartData = async () => {
        try {
            // const response = await fetch("/api/cart");
            // const data = await response.json();

            const data = CartData;
            return data;
        } catch (error) {
            console.error("Error fetching cart data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const data = await fetchCartData();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataAndSetState();
    }, []);
    const [products, setProducts] = useState<Product[]>([]);
    const handleDelete = async (product: Product) => {
        try {
            // await fetch(`/api/cart/${product.name}`, { method: "DELETE" }); // Replace with your API endpoint
            // const updatedData = await fetchCartData();
            // setProducts(updatedData);
            setProducts(products.slice(1, products.length));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };
    return (
        <div className={cn("overflow-y-auto flex-shrink-0", className)}>
            <ul className="space-y-2 p-2">
                {products.map((product, index) => (
                    <li key={index}>
                        <Card product={product} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
