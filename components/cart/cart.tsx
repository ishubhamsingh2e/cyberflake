import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import CartCard from "./cart-card";
import { cn } from "@/lib/utils";

interface CartProps {
    className?: string;
}

function Cart({ className }: CartProps) {
    return (
        <ScrollArea className={(cn("flex-grow mb-24"), className)}>
            <ul className="space-y-2 p-2">
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
                <li>
                    <CartCard />
                </li>
            </ul>
        </ScrollArea>
    );
}

export default Cart;
