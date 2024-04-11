"use client"
import Link from "next/link";
import { LINK_STYLE } from "../lib/constants";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function SideNav() {
    const url = usePathname()
    useEffect(() => {
        setState(url);
    }, [url]);

    const [state, setState] = useState(url);

    return (
        <div className="w-full md:min-w-64 md:w-64 lg:min-h-screen min-h-fit  h-auto flex flex-col items-center p-4 shadow-xl">
            {state === "/dashboard" ?
                <Link href={"/projects"} className={LINK_STYLE} onClick={() => { setState("/projects") }}>My projects</Link>
                : state !== "/projects" ?
                    <>
                        <Link href={"/projects"} className={LINK_STYLE} onClick={() => { setState("/projects") }}>Return</Link>
                        <Link href={"/dashboard"} className={LINK_STYLE} onClick={() => { setState("/dashboard") }}>My resume</Link>
                    </>
                    : <Link href={"/dashboard"} className={LINK_STYLE} onClick={() => { setState("/dashboard") }}>My resume</Link>
            }
            <Toaster />
        </div>
    )
}