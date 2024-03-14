"use client";

import { AddressForm } from "@/components/address-form";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Products from "./products";

import useRazorpay from "react-razorpay";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { apiClient } from "@/lib/api";

import { useToast } from "@/components/ui/use-toast";

function CheckOut() {
    const [billingAndShipingAddressIsSame, setBillingAndShipingAddressIsSame] =
        useState(true);
    const [paymentIsProcessing, setPaymentIsProcessing] = useState(false);

    const { toast } = useToast();
    const [Razorpay] = useRazorpay();

    async function razorPay(amount: string, order_id: string) {
        var options = {
            key: "rzp_live_awbZPBbpVzLqi6",
            amount: amount,
            currency: "INR",
            name: "CYBERFLAKE",
            image: "/logo.jpg",
            order_id: order_id,
            handler: async function (response) {
                console.log(response);
                apiClient
                    .VerifyRazorPay(
                        response.razorpay_payment_id,
                        response.razorpay_order_id,
                        response.razorpay_signature,
                    )
                    .then((res) => {
                        console.log(res);
                        setPaymentIsProcessing(false);
                        if (res.error) {
                            toast({
                                title: "Something Went Wrong!",
                                variant: "destructive",
                                description: res.error,
                            });
                        } else if (res.message) {
                            toast({
                                title: "Payment Successful!",
                                description: "Payment is successful",
                            });
                            window.location.href = "/";
                        } else {
                            toast({
                                title: "Something Went Wrong!",
                                variant: "destructive",
                                description: "Payment Can't be Verified",
                            });
                        }
                    });
            },
            theme: {
                color: "#533267",
            },
        };

        const rzp1 = new Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });

        rzp1.open();
    }

    async function checkout() {
        setPaymentIsProcessing(true);
        apiClient.checkout(billingAndShipingAddressIsSame).then(async (res) => {
            if (res.error) {
                toast({
                    title: "Something Went Wrong!",
                    variant: "destructive",
                    description: res.error,
                });
                setPaymentIsProcessing(false);
            } else if (res.payment) {
                await razorPay(res.payment.amount, res.payment.id);
                setPaymentIsProcessing(false);
            } else {
                toast({
                    title: "Something Went Wrong!",
                    variant: "destructive",
                    description: "Request can't be made",
                });
                setPaymentIsProcessing(false);
            }
        });
    }

    return (
        <div className="md:flex md:gap-12">
            <div className="md:w-1/3">
                <Products />
                <p className="text-sm text-slate-600 pt-3">
                    If you canceled the pay or something went wrong while paying
                    you can find you order{" "}
                    <a className="text-primary underline" href="/orders">
                        here
                    </a>
                </p>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button className="w-full my-4 py-6">
                            Place Order <Icons.bag className="w-5 h-5 ml-2" />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Take a moment to ensure your items are just what
                                you've been dreaming of and that your address is
                                the perfect destination for all the excitement.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                disabled={paymentIsProcessing}
                                onClick={checkout}
                            >
                                {paymentIsProcessing ? (
                                    <Icons.spinner className="mr-1 h-4 w-4 animate-spin" />
                                ) : (
                                    <Icons.lock className="w-4 h-4 mr-1" />
                                )}
                                Pay
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div className="md:w-2/3 space-y-10 mt-10 md:mt-0">
                <div>
                    <h1 className="text-xl">Address</h1>
                    <Separator className="my-1" />
                    <div className="md:px-5">
                        <AddressForm
                            billingAndShipingAddressIsSame={
                                billingAndShipingAddressIsSame
                            }
                            setBillingAndShipingAddressIsSame={
                                setBillingAndShipingAddressIsSame
                            }
                        />
                    </div>
                </div>
                <div className="hidden">
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
