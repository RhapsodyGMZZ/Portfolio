"use client"
import Link from "next/link";
import { LINK_STYLE } from "../lib/constants";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function SideNav() {
    const url = usePathname()
    useEffect(()=>{
        url==="/dashboard" ? setState(true) : setState(false);
    },[url]);

    const [state, setState] = useState(url==="/dashboard");
    
    return (
        <div className="w-full md:min-w-64 md:w-64 md:min-h-screen h-fit flex flex-col items-center p-4 shadow-xl">
            {state ?
                <Link href={"/projects"} className={LINK_STYLE} onClick={() => {setState(false)}}>My projects</Link>
                : <Link href={"/dashboard"} className={LINK_STYLE} onClick={() => { setState(true) }}>My resume</Link>
            }
        </div>
    )
}