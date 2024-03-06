import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface LoadingProps {
    className?: string;
}

function Loading({ className }: LoadingProps) {
    return (
        <div
            className={cn(
                "flex justify-center items-center space-x-3",
                className,
            )}
        >
            <div className="flex flex-col justify-center text-center space-y-2 text-xl animate-bounce duration-500">
                <Icons.build className="w-8 h-10 stroke-primary" />
            </div>

            <div className="flex flex-col justify-center text-center space-y-2 text-xl animate-bounce delay-100 duration-500">
                <Icons.create className="w-10 h-10 stroke-primary fill-primary" />
            </div>

            <div className="flex flex-col justify-center text-center space-y-2 animate-bounce delay-200 duration-500">
                <Icons.evolve className="w-8 h-10 stroke-primary fill-primary" />
            </div>
        </div>
    );
}

export default Loading;
