"use client";

import React from "react";
import Products from "./products";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import { useSearchParams } from "next/navigation";
function Search() {
    const search = useSearchParams();
    return (
        <div className="space-y-6">
            <div className="flex justify-between">
                <h1>
                    Result for:{" "}
                    <span className="italic text-blue-400">
                        {search.get("q")}
                    </span>
                </h1>
                <section className="md:hidden">
                    <Drawer>
                        <div className="flex justify-end">
                            <DrawerTrigger asChild>
                                <Button
                                    variant={"link"}
                                    className="text-base italic underline underline-offset-4"
                                >
                                    Filters
                                </Button>
                            </DrawerTrigger>
                        </div>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>
                                    Are you sure absolutely sure?
                                </DrawerTitle>
                                <DrawerDescription>
                                    This action cannot be undone.
                                </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <Button>Submit</Button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </section>
            </div>
            <Products />
        </div>
    );
}

export default Search;
