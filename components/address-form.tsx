"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

const formSchema = z.object({
    reciver: z.string().min(2, {
        message: "Reciver Name must be at least 2 characters.",
    }),
    reciverPhone: z.string().min(10).max(10, {
        message: "Phone number must be must be 10 digit",
    }),
    addressL1: z.string().min(2, {
        message: "Address must be at least 2 characters.",
    }),
    addressL2: z.string(),
    state: z.string().min(2, {
        message: "You must select a state",
    }),
    pin: z.string().min(6).max(6, {
        message: "Pin must be 6 digit",
    }),
});

export function AddressForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            reciver: "",
            reciverPhone: undefined,
            addressL1: "",
            addressL2: "",
            state: "",
            pin: undefined,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex gap-2">
                    <div className="flex-grow">
                        <FormField
                            control={form.control}
                            name="reciver"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="grow">
                                        <FormLabel>Reciver Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex-grow">
                        <FormField
                            control={form.control}
                            name="reciverPhone"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="grow">
                                        <FormLabel>Reciver Phone</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="number" max={10}/>
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="addressL1"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grow">
                                <FormLabel>Address Line 1</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="addressL2"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grow">
                                <FormLabel>Address Line 2</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <div className="flex gap-2 ">
                    <div className="flex-grow">
                        <FormField
                            control={form.control}
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
                                            <SelectItem value="m@example.com">
                                                m@example.com
                                            </SelectItem>
                                            <SelectItem value="m@google.com">
                                                m@google.com
                                            </SelectItem>
                                            <SelectItem value="m@support.com">
                                                m@support.com
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="space-y-2">
                                        <FormLabel>Pin Code</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button className="float-right" type="submit">
                    Save
                </Button>
            </form>
        </Form>
    );
}
