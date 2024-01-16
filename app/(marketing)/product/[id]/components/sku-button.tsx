"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

interface Props {
    SKU: string;
}

function SKUButton({ SKU }: Props) {
    const { toast } = useToast();

    return (
        <Button
            onClick={() => {
                navigator.clipboard.writeText(SKU);
                toast({
                    title: "Copied",
                    description: `${SKU} is copied to clipboard`,
                });
            }}
            variant={"outline"}
        >
            SKU - {SKU}
        </Button>
    );
}

export default SKUButton;
