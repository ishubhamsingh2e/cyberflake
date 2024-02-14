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
    DropdownMenuShortcut,
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
                alert("can't get user!");
            }
        });
    });

    function logout() {
        deleteCookie("JWT");
        location.reload();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                disabled={!(name !== "" && phone !== "")}
            >
                <Button
                    variant="ghost"
                    size={"icon"}
                    className="relative lg:h-10 lg:w-10"
                >
                    <Avatar className="lg:h-10 lg:w-10 rounded-md">
                        <AvatarImage
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="@shadcn"
                        />
                        <AvatarFallback className="rounded-md">
                            SC
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
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
                <DropdownMenuGroup>
                    <DropdownMenuItem disabled>
                        <Icons.heart className="mr-1 h-4 w-4 text-pink-500 fill-pink-500" />
                        Wishlist
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        <Icons.support className="mr-1 h-4 w-4 text-yellow-500 fill-yellow-500" />
                        Support!
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
