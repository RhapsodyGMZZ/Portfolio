import React from "react";
import SideNav from "@app/ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col md:flex-row lg:overflow-y-hidden max-h-screen lg:max-h-[86vh]">
            <SideNav />
            <div className="flex-grow p-6 overflow-y-auto lg:overflow-y-hidden md:p-12">{children}</div>
        </main>
    )
}