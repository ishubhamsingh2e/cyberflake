import { Icons } from "@/components/icons";

function Loading() {
    return (
        <div className="bg-primary h-screen w-screen flex justify-center items-center space-x-3">
            <div className="flex flex-col justify-center text-center text-slate-50 space-y-2 text-xl animate-bounce duration-500">
                <Icons.build className="w-16 h-20 stroke-slate-50" />
            </div>

            <div className="flex flex-col justify-center text-center text-slate-50 space-y-2 text-xl animate-bounce delay-100 duration-500">
                <Icons.create className="w-20 h-20 stroke-slate-50 fill-slate-50" />
            </div>

            <div className="flex flex-col justify-center text-center text-slate-50 space-y-2 animate-bounce delay-200 duration-500">
                <Icons.evolve className="w-16 h-20 stroke-slate-50 fill-slate-50" />
            </div>
        </div>
    );
}

export default Loading;
