"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { indianStates } from "@/config/state-and-city";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { apiClient } from "@/lib/api";

import { useToast } from "@/components/ui/use-toast";

const formSchemaBilling = z.object({
    firstName: z.string().min(2, {
        message: "Reciver Name must be at least 2 characters.",
    }),
    lastName: z.string().optional(),
    reciverPhone: z.string().refine((data) => data.length == 10, {
        message: "Phone number must be 10 digits.",
    }),
    addressL1: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),
    addressL2: z.string(),
    companyName: z.string().optional(),
    gst: z.string().optional(),
    state: z.string().min(2, {
        message: "You must select a state",
    }),
    city: z.string().min(2, {
        message: "You must select a state",
    }),
    pin: z.string().length(6, {
        message: "Pin must be 6 digit",
    }),
});

const formSchemaShipping = z.object({
    firstName: z.string().min(2, {
        message: "Reciver Name must be at least 2 characters.",
    }),
    lastName: z.string().optional(),
    reciverPhone: z.string().refine((data) => data.length == 10, {
        message: "Phone number must be 10 digits.",
    }),
    addressL1: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),
    addressL2: z.string(),
    companyName: z.string().optional(),
    gst: z.string().optional(),
    state: z.string().min(2, {
        message: "You must select a state",
    }),
    city: z.string().min(2, {
        message: "You must select a state",
    }),
    pin: z.string().length(6, {
        message: "Pin must be 6 digit",
    }),
});

export function AddressForm() {
    const [billingAndShipingAddressIsSame, setBillingAndShipingAddressIsSame] =
        useState(true);
    const [isloading, setIsLoading] = useState(true);

    const { toast } = useToast();

    const formBilling = useForm<z.infer<typeof formSchemaBilling>>({
        resolver: zodResolver(formSchemaBilling),
        defaultValues: {
            firstName: "",
            lastName: "",
            reciverPhone: "",
            companyName: "",
            addressL1: "",
            addressL2: "",
            pin: "",
            city: "",
            state: "",
            gst: "",
        },
    });

    const formShipping = useForm<z.infer<typeof formSchemaShipping>>({
        resolver: zodResolver(formSchemaShipping),
        defaultValues: {
            firstName: "",
            reciverPhone: "",
            addressL1: "",
            addressL2: "",
            state: "",
            city: "",
            pin: "",
        },
    });

    useEffect(() => {
        async function loadAddress() {
            await apiClient.getUserAddress().then((res) => {
                if (res.addresses) {
                    formBilling.reset({
                        firstName: res.addresses.billing.first_name || "",
                        lastName: res.addresses.billing.last_name || "",
                        reciverPhone: res.addresses.billing.phone || "",
                        companyName: res.addresses.billing.company_name || "",
                        addressL1: res.addresses.billing.address_l1 || "",
                        addressL2: res.addresses.billing.address_l2 || "",
                        pin: res.addresses.billing.pincode || undefined,
                        city: res.addresses.billing.city || "",
                        state: res.addresses.billing.state || "",
                        gst: res.addresses.billing.GST || "",
                    });

                    formShipping.reset({
                        firstName: res.addresses.shipping.first_name || "",
                        lastName: res.addresses.shipping.last_name || "",
                        reciverPhone: res.addresses.shipping.phone || undefined,
                        addressL1: res.addresses.shipping.address_l1 || "",
                        addressL2: res.addresses.shipping.address_l2 || "",
                        pin: res.addresses.shipping.pincode || "",
                        city: res.addresses.shipping.city || "",
                        state: res.addresses.shipping.state || "",
                    });
                }
            });
        }
        loadAddress().then(() => {
            setIsLoading(false);
        });
    }, []);

    function onSubmitBilling(values: z.infer<typeof formSchemaBilling>) {
        apiClient
            .patchUserBillingAddress(
                values.companyName,
                values.firstName,
                values.lastName,
                values.reciverPhone,
                values.addressL1,
                values.addressL2,
                values.pin,
                values.city,
                values.state,
                values.gst,
            )
            .then((res) => {
                if (res.message) {
                    toast({
                        title: "Billing Address",
                        description: "Address Update Sucessfuly",
                    });
                } else {
                    toast({
                        title: "Billing Address",
                        variant: "destructive",
                        description: "Something Went Wrong",
                    });
                }
            });
    }
    function onSubmitShipping(values: z.infer<typeof formSchemaShipping>) {
        console.log("HELLO");
        console.log(values);
        apiClient
            .PatchUserShippingAddress(
                values.firstName,
                values.lastName,
                values.reciverPhone,
                values.addressL1,
                values.addressL2,
                values.pin,
                values.city,
                values.state,
            )
            .then((res) => {
                if (res.message) {
                    toast({
                        title: "Shipping Address",
                        description: "Address Update Sucessfuly",
                    });
                } else {
                    toast({
                        title: "Shipping Address",
                        variant: "destructive",
                        description: "Something Went Wrong",
                    });
                }
            });
    }

    return (
        <>
            {isloading ? null : (
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-2 mt-4">
                        <Checkbox
                            id="billing-and-shipping"
                            defaultChecked={billingAndShipingAddressIsSame}
                            onClick={() => {
                                setBillingAndShipingAddressIsSame(
                                    !billingAndShipingAddressIsSame,
                                );
                            }}
                        />
                        <label
                            htmlFor="billing-and-shipping"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Billing and shipping address are same
                        </label>
                    </div>

                    {/* form billing start */}

                    <Form {...formBilling}>
                        <form
                            onSubmit={formBilling.handleSubmit(onSubmitBilling)}
                            className="space-y-4"
                        >
                            <div className="md:grid md:grid-cols-3 md:gap-2 space-y-2">
                                <FormField
                                    control={formBilling.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="mt-2">
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formBilling.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formBilling.control}
                                    name="reciverPhone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={formBilling.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Company Name (Optional)
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={formBilling.control}
                                name="addressL1"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Billig Address Line 1
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={formBilling.control}
                                name="addressL2"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Billig Address Line 2
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="md:grid md:grid-cols-3 md:gap-2 space-y-2">
                                <FormField
                                    control={formBilling.control}
                                    name="pin"
                                    render={({ field }) => (
                                        <FormItem className="mt-2">
                                            <FormLabel>Pin Code</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={formBilling.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="text" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={formBilling.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>State</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a State" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {indianStates.map(
                                                        (item, index) => (
                                                            <SelectItem
                                                                key={index}
                                                                value={item}
                                                            >
                                                                {item}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={formBilling.control}
                                name="gst"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>GST (Optional)</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="float-right" type="submit">
                                Apply
                            </Button>
                        </form>
                    </Form>

                    {/* from billing end */}

                    {/* from shipping start */}

                    {billingAndShipingAddressIsSame ? null : (
                        <div>
                            <h1 className="text-xl">Shipping Details</h1>
                            <Separator className="my-1 mb-5" />
                            <Form {...formShipping}>
                                <form
                                    onSubmit={formShipping.handleSubmit(
                                        onSubmitShipping,
                                    )}
                                    className="space-y-4"
                                >
                                    <div className="md:grid md:grid-cols-3 md:gap-2 space-y-2">
                                        <FormField
                                            control={formShipping.control}
                                            name="firstName"
                                            render={({ field }) => (
                                                <FormItem className="mt-2">
                                                    <FormLabel>
                                                        First Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={formShipping.control}
                                            name="lastName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Last Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={formShipping.control}
                                            name="reciverPhone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Phone Number
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="number"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={formShipping.control}
                                        name="addressL1"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Shipping Address Line 1
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={formShipping.control}
                                        name="addressL2"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Shipping Address Line 2
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="md:grid md:grid-cols-3 md:gap-2 space-y-2">
                                        <FormField
                                            control={formShipping.control}
                                            name="pin"
                                            render={({ field }) => (
                                                <FormItem className="mt-2">
                                                    <FormLabel>
                                                        Pin Code
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="number"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={formShipping.control}
                                            name="city"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>City</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={formShipping.control}
                                            name="state"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>State</FormLabel>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        defaultValue={
                                                            field.value
                                                        }
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select a State" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {indianStates.map(
                                                                (
                                                                    item,
                                                                    index,
                                                                ) => (
                                                                    <SelectItem
                                                                        key={
                                                                            index
                                                                        }
                                                                        value={
                                                                            item
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </SelectItem>
                                                                ),
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button
                                        className="float-right"
                                        type="submit"
                                    >
                                        Apply
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    )}

                    {/* from shipoping end */}
                </div>
            )}
        </>
    );
}
