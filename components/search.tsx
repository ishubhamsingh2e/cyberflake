"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface SearchProps {
    className?: string;
}

function Search({ className }: SearchProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    function handleSearchSubmit(event: React.FormEvent) {
        event.preventDefault();
        router.push(`/search?q=${encodeURI(searchQuery)}`);
    }

    return (
        <form onSubmit={handleSearchSubmit} className="w-full">
            <Input
                placeholder="Search"
                className={cn(className)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
    );
}

export default Search;
