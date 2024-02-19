"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Icons } from "../icons";

interface DigitInputProps {
    value: number;
    onDigitChange: (newValue: number) => void;
    className?: string;
}

function DigitInput({ value, onDigitChange, className }: DigitInputProps) {
    const handleIncrement = () => {
        onDigitChange(value + 1);
    };

    const handleDecrement = () => {
        onDigitChange(Math.max(1, value - 1));
    };

    return (
        <div className={cn("flex gap-x-1", className)}>
            <Button
                variant={"outline"}
                size={"icon"}
                className="shadow-sm flex-shrink w-auto h-auto p-3"
                onClick={handleDecrement}
            >
                <Icons.minus className="w-6 h-6" />
            </Button>
            <input
                type="number"
                className={
                    "flex rounded-md w-16 border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                }
                readOnly
                value={value}
            />
            <Button
                variant={"outline"}
                size={"icon"}
                className="shadow-sm flex-shrink w-auto h-auto p-3"
                onClick={handleIncrement}
            >
                <Icons.plus className="w-6 h-6" />
            </Button>
        </div>
    );
}

DigitInput.displayName = "Input";

export { DigitInput };
