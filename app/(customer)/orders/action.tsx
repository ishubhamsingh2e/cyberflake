"use client";

import React, { useEffect, useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Order, OrderItems } from "@/types/types";
import { apiClient } from "@/lib/api";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Loading from "@/components/loading";

interface ActionProps {
    id: number;
}

interface DialogContentRenderProp {
    id: number;
}

function DialogContentRender({ id }: DialogContentRenderProp) {
    const [orderDetails, setOrderDetails] = useState<Order | null>(null);
    const [items, setItems] = useState<OrderItems[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiClient.getOrder(id).then((res) => {
            setOrderDetails(res.order);
            setItems(res.items);
            setIsLoading(false);
        });
    }, [id]);

    const excludedKeys = [
        "billing_and_shipping_address_are_same",
        "user",
        "id",
    ];

    return (
        <DialogDescription asChild>
            {isLoading ? (
                <Loading className="pt-16 pb-6" />
            ) : (
                <div className="text-slate-900 overflow-y-auto h-[58vh]">
                    {Object.entries(orderDetails || {}).map(
                        ([key, value]) =>
                            !excludedKeys.includes(key) && (
                                <div
                                    className="grid grid-cols-2 w-full space-y-1 border-b border-slate-200 py-1"
                                    key={key}
                                >
                                    <span className="flex items-center font-semibold">
                                        {key}
                                    </span>
                                    <p>{value}</p>
                                </div>
                            ),
                    )}
                    <h1 className="text-lg mt-5 mb-3 font-semibold">
                        Items Ordered
                    </h1>
                    <div className="mr-2">
                        <div className="grid grid-cols-3 space-y-1 text-right border-b border-slate-200">
                            <span className="font-semibold mb-2">Item</span>
                            <span className="font-semibold mb-2">Quantity</span>
                            <span className="font-semibold mb-2">Price</span>
                        </div>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 space-y-1 text-right py-1 border-b border-slate-200"
                            >
                                <a
                                    href={`/product/${item.product.SKU}`}
                                    target="_blank"
                                    className="text-primary hover:underline"
                                >
                                    {item.product.name}
                                </a>
                                <span className="flex items-center justify-end">
                                    {item.quantity}
                                </span>
                                <span className="flex items-center justify-end">
                                    ₹{item.price}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="h-16 w-full"></div>
                </div>
            )}
        </DialogDescription>
    );
}

function Action({ id }: ActionProps) {
    console.log(id);
    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="w-full" variant="outline" size="icon">
                        <Icons.ellipsis className="w-6 h-6" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Manage Order</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                        Pay Due
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        Request Cancelation
                    </DropdownMenuItem>
                    <DialogTrigger asChild>
                        <DropdownMenuItem className="cursor-pointer">
                            Details
                        </DropdownMenuItem>
                    </DialogTrigger>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle asChild>
                        <div className="leading-tight">
                            <h1>Order Referance Info</h1>
                            <h2 className="text-sm text-primary/80 font-normal">
                                *This is not an invoice
                            </h2>
                        </div>
                    </DialogTitle>
                    <DialogDescription asChild>
                        <DialogContentRender id={id} />
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Action;
