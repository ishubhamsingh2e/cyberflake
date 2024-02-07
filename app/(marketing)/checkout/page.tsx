import { AddressForm } from "@/components/address-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CartItems } from "@/components/cart";

function CheckOut() {
    return (
        <div className="md:flex md:gap-12">
            <div className="md:w-1/3">
                <div className="rounded bg-slate-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:px-6 md:py-4 py-2 px-2">
                    <h1 className="text-lg">CheckOut</h1>
                    <Separator className="my-1" />
                    <ScrollArea className="w-full h-96">
                        <CartItems className="h-[80%] max-h-[80%] mb-2 mr-1" />
                    </ScrollArea>
                    <Separator className="my-1" />
                    <div className="flex gap-2 my-2">
                        <Input placeholder="coupon" />
                        <Button>Apply</Button>
                    </div>
                    <Separator className="my-1" />
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Item:</span>
                            <span>₹20,345</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery:</span>
                            <span>₹0</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax:</span>
                            <span>₹18000</span>
                        </div>
                        <Separator className="my-1" />
                        <div className="flex justify-between">
                            <span>Total:</span>
                            <span>₹20,345</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-2/3 space-y-10 mt-10 md:mt-0">
                <div>
                    <h1 className="text-xl">Address</h1>
                    <Separator className="my-1" />
                    <div className="md:px-5">
                        <AddressForm />
                    </div>
                </div>
                <div>
                    <h1 className="text-xl">Payment Method</h1>
                    <Separator className="my-1" />
                    <div className="py-8 px-5">
                        <RadioGroup
                            defaultValue="option-one"
                            className="md:flex space-y-2"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="Razor Pay"
                                    id="razor-pay"
                                />
                                <Label htmlFor="razor-pay" asChild>
                                    <Icons.razorPay className="w-36" />
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="Phone Pay"
                                    id="phone-pay"
                                />
                                <Label htmlFor="phone-pay" asChild>
                                    <Icons.phonePay className="w-36" />
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
