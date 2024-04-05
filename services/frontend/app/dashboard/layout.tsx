import React from "react";
import SideNav from "@app/ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col md:flex-row md:overflow-hidden">
            <SideNav />
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </main>
    )
}