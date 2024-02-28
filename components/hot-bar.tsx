import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface Props {
    className?: string;
}

interface Response {
    id: number;
    name: string;
    url: string;
}

async function getItems() {
    const res = await fetch("https://api.cyberflake.in/hotbar", {
        cache: "no-store",
    });
    const data: Response[] = await res.json();
    return data;
}

async function HotBar({ className }: Props) {
    const hotbar = await getItems();

    return (
        <ul
            className={cn(
                "space-x-2 overflow-x-scroll w-screen whitespace-nowrap no-scrollbar",
                className,
            )}
        >
            {hotbar.map((item, index) => (
                <li key={index} className="inline-block">
                    <a
                        className={buttonVariants({ variant: "ghost" })}
                        href={item.url}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default HotBar;
