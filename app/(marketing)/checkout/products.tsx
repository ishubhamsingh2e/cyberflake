"use client";

import { CartItems } from "@/components/cart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

function Products() {
    const [total, setTotal] = useState(0);
    const [delivery, setDelivery] = useState(0);

    return (
        <div className="rounded bg-slate-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:px-6 md:py-4 py-2 px-2">
            <h1 className="text-lg">CheckOut</h1>
            <Separator className="my-1" />
            <ScrollArea className="w-full h-96">
                <CartItems
                    Settotal={setTotal}
                    className="h-[80%] max-h-[80%] mb-2 mr-1"
                />
            </ScrollArea>
            {/* <Separator className="my-1" />
            <div className="flex gap-2 my-2">
                <Input placeholder="coupon" />
                <Button>Apply</Button>
            </div> */}
            <Separator className="my-1" />
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Item:</span>
                    <span>
                        ₹
                        {Intl.NumberFormat("en-IN").format(
                            total - total * 0.18,
                        )}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span>₹0</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>
                        ₹ {Intl.NumberFormat("en-IN").format(total * 0.18)}
                    </span>
                </div>
                <Separator className="my-1" />
                <div className="flex justify-between">
                    <span>Total:</span>
                    <span>
                        ₹{Intl.NumberFormat("en-IN").format(total + delivery)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Products;
