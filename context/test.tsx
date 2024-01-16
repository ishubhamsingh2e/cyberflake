import React, { createContext, useContext, useState } from "react";

// Define the SidebarContext with a specific type for the value
interface SidebarContextValue {
    isOpen: boolean | undefined;
}

const SidebarContext = createContext<SidebarContextValue>({
    isOpen: undefined
});


export function Sidebar({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean | undefined>();

    return (
        <SidebarContext.Provider value={{ isOpen }}>
            {children}

        </SidebarContext.Provider>
    );
}
