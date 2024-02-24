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
import Products from "./products";

function CheckOut() {
    return (
        <div className="md:flex md:gap-12">
            <div className="md:w-1/3">
                <Products />
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
