"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { apiClient } from "@/lib/api";
import { deleteCookie, setCookie } from "@/lib/cookie";
import React from "react";
import { Icons } from "./icons";

export function UserNav() {
    const [name, setName] = React.useState<string>("");
    const [phone, SetPhone] = React.useState<string>("");

    React.useEffect(() => {
        apiClient.getUser().then((res) => {
            if (res) {
                setName(res.user.name);
                SetPhone(res.user.phone);
                setCookie("JWT", res.user.token, 7);
            } else {
                window.location.href = "/login";
            }
        });
    });

    function logout() {
        deleteCookie("JWT");
        location.reload();
    }

    function login() {
        window.location.href = "/login";
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size={"icon"}
                    className="relative lg:h-10 lg:w-10"
                >
                    <Avatar className="lg:h-10 lg:w-10 rounded-md">
                        <AvatarImage src="logo.jpg" alt="@cyberflake" />
                        <AvatarFallback className="rounded-md">
                            CF
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                {name !== "" && phone !== "" ? (
                    <>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {name}
                                </p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    (+91) {phone}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                    </>
                ) : null}
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                            window.location.href = "/wishlist";
                        }}
                    >
                        <Icons.heart className="mr-1 h-4 w-4 text-pink-500 fill-pink-500" />
                        Wishlist
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                            window.location.href = "/orders";
                        }}
                    >
                        <Icons.order className="mr-1 h-4 w-4 text-primary fill-primary" />
                        Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" disabled>
                        <Icons.support className="mr-1 h-4 w-4 text-yellow-500 fill-yellow-500" />
                        Support!
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {name !== "" && phone !== "" ? (
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={logout}
                    >
                        Log out
                    </DropdownMenuItem>
                ) : (
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={login}
                    >
                        Log in
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
