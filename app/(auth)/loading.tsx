"use client";

import { Icons } from "@/components/icons";
import React, { useState, useEffect } from "react";

function loading() {
    const [currentIcon, setCurrentIcon] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIcon((prevIcon) => (prevIcon % 3) + 1);
        }, 1500); // Change the duration as needed

        return () => clearInterval(interval);
    }, []);

    const getIcon = () => {
        switch (currentIcon) {
            case 1:
                return (
                    <div className="flex flex-col justify-center items-center text-slate-50 text-xl space-y-2">
                        <Icons.build className="w-20 h-20" />
                        <label className="text-slate-50">build</label>
                    </div>
                );
            case 2:
                return (
                    <div className="flex flex-col justify-center items-center text-slate-50 text-xl space-y-2">
                        <Icons.create className="w-20 h-20" />
                        <label className="text-slate-50">create</label>
                    </div>
                );
            case 3:
                return (
                    <div className="flex flex-col justify-center items-center text-slate-50 text-xl space-y-2">
                        <Icons.evolve className="w-20 h-20" />
                        <label className="text-slate-50">evolve</label>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-primary h-screen w-screen flex justify-center items-center">
            {getIcon()}
        </div>
    );
}

export default loading;
