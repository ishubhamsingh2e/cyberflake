import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { apiClientServer } from "@/lib/localrequests";

interface Props {
    className?: string;
}

interface Response {
    id: number;
    name: string;
    url: string;
}

async function HotBar({ className }: Props) {
    const hotbar: Response[] = await apiClientServer.getHotBar();

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
