import React from "react";
import { Button } from "../ui/button";
import Cart from "./cart";

function CartSide() {
    return (
        <div className="w-full h-full flex flex-col relative">
            <Cart/>
            <div className="absolute bottom-8 w-full">
                <Button className="w-full h-12">Check Out</Button>
            </div>
        </div>
    );
}

export default CartSide;
