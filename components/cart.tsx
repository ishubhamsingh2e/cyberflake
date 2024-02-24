"use client";

import React, { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import { apiClient } from "@/lib/api";
import { getCookie } from "@/lib/cookie";
import { CartItem } from "@/types/types";

interface CartCardProps {
    id: number;
    name: string;
    image: string;
    price: number;
    discountPrice: number;
    quantity: number;

    onDelete: (id: number) => void;
}

export function Card({
    id,
    name,
    image,
    price,
    discountPrice,
    quantity,
    onDelete,
}: CartCardProps) {
    return (
        <div className="relative flex rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-slate-50 space-x-1 py-1 px-1 h-32">
            <img
                className="object-cover rounded mr-1 h-full"
                src={image}
                alt="Product Image"
            />
            <div className="grow flex flex-col gap-1">
                <h2 className="text-sm">{name}</h2>
                <div className="flex gap-1 items-baseline">
                    <span className="font-normal text-base">
                        ₹{Intl.NumberFormat("en-IN").format(discountPrice)}
                    </span>
                    {discountPrice && (
                        <span className="font-normal text-sm text-slate-400 line-through">
                            ₹{Intl.NumberFormat("en-IN").format(price)}
                        </span>
                    )}
                </div>
                <div className="font-bold text-sm">
                    Unit: <span className="font-semibold">{quantity}</span>
                </div>
            </div>
            <div className="flex flex-col items-end absolute right-6 bottom-0 leading-none">
                <Button
                    className="h-8 w-8"
                    size={"icon"}
                    variant={"link"}
                    onClick={() => onDelete(id)}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
}

export function Cart() {
    const [total, setTotal] = useState(0);

    return (
        <div className="h-full">
            <CartItems className="h-[80%] max-h-[80%]" Settotal={setTotal} />
            <div className="h-[20%] flex place-items-stretch flex-col p-4 space-y-1 md:space-y-2">
                <div className="flex justify-between w-full">
                    <span className="text-xl md:text-2xl">Total</span>
                    <span className="text-xl md:text-2xl">
                        ₹{Intl.NumberFormat("en-IN").format(total)}
                    </span>
                </div>
                <div className="text-slate-400 text-xs md:text-sm">
                    Tax included and shipping calculated at checkout
                </div>
                <Button
                    onClick={() => {
                        window.location.href = "/checkout";
                    }}
                    className="w-full h-12"
                >
                    Check Out
                </Button>
            </div>
        </div>
    );
}

interface CartItemsProps {
    Settotal?: Dispatch<SetStateAction<number>>;
    className?: string;
}

export function CartItems({ Settotal, className }: CartItemsProps) {
    const fetchCartData = async () => {
        try {
            if (getCookie("JWT")) {
                const data = await apiClient.getCart();
                return data;
            } else {
                window.location.href = "/login";
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
            if (error.response && error.response.status === 401) {
                window.location.href = "/login";
            }

            return [];
        }
    };

    const fetchDataAndSetState = async () => {
        try {
            const data = await fetchCartData();
            await setCart(data);
            cartTotal(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchDataAndSetState();
    }, []);

    const [cart, setCart] = useState<CartItem[]>([]);
    const handleDelete = async (id: number) => {
        try {
            const res = await apiClient.deleteFromCart(id).then(() => {
                fetchDataAndSetState();
            });
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    function cartTotal(data) {
        let total = 0;

        data.forEach((item) => {
            const price = Number(item.product.regular_price);
            total += price * item.quantity;
        });
        Settotal(total);
    }

    return (
        <div className={cn("overflow-y-auto flex-shrink-0", className)}>
            <ul className="space-y-2 p-2">
                {cart.map((item, index) => (
                    <li key={index}>
                        <Card
                            id={item.id}
                            name={item.product.name}
                            image={`https://api.cyberflake.in${item.product.thumbnail}`}
                            price={item.product.MRP}
                            discountPrice={item.product.regular_price}
                            quantity={item.quantity}
                            onDelete={handleDelete}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
