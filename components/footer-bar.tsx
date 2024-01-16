import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "./ui/button";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)}>
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Icons.monogram className="w-8" />
                    <p className="text-center text-sm leading-loose md:text-left">
                        Built by{" "}
                        <a
                            href={"mailto:" + siteConfig.email}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-primary"
                        >
                            Code&Canvas
                        </a>{" "}
                        © 2021-2023,{" "}
                        <a
                            href={siteConfig.url}
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-primary"
                        >
                            cyberflake.co.in
                        </a>
                        , Inc. or its affiliates.
                    </p>
                </div>
                <div className="space-x-1">
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="shadow-sm"
                    >
                        <Icons.facebook strokeWidth={1.75} className="w-6" />
                    </Button>
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="shadow-sm"
                    >
                        <Icons.instagram strokeWidth={1.75} className="w-6" />
                    </Button>
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="shadow-sm"
                    >
                        <Icons.twitter strokeWidth={1.75} className="w-6" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
