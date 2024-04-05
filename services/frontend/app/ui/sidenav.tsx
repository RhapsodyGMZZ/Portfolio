"use client"
import Link from "next/link";
import { LINK_STYLE } from "../lib/constants";
import { useState } from "react";

export default function SideNav() {
    const [state, setState] = useState(true)
    return (
        <div className="w-full md:min-w-64 md:w-64 min-h-screen flex flex-col items-center p-4 shadow-xl">
            {state ?
                <Link href={"/dashboard/projects"} className={LINK_STYLE} onClick={() => { setState(!state) }}>My projects</Link>
                : <Link href={"/dashboard"} className={LINK_STYLE} onClick={() => { setState(!state) }}>My resume</Link>
            }
        </div>
    )
}