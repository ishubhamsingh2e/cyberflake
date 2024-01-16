import React from "react";
import { Button } from "./ui/button";
import hotbar from "@/config/hotbar";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

function HotBar({ className }: Props) {
    return (
        <ul
            className={cn(
                "space-x-2 overflow-x-scroll w-screen whitespace-nowrap no-scrollbar",
                className,
            )}
        >
            {hotbar.map((item, index) => (
                <li key={index} className="inline-block">
                    <Button variant={"ghost"}>{item.title}</Button>
                </li>
            ))}
        </ul>
    );
}

export default HotBar;
