"use client"
import Link from "next/link";
import { LINK_STYLE } from "../lib/constants";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
    const url = usePathname()
    useEffect(() => {
        setState(url);
    }, [url]);

    const [state, setState] = useState(url);
    const [rotate, setRotate] = useState(false)
    return (
        <div className="w-full md:min-w-64 md:w-64 lg:min-h-screen min-h-fit  h-auto flex flex-col items-center p-4 shadow-xl">
            {state === "/dashboard" ?
                <Link href={"/projects"} className={LINK_STYLE} onClick={() => { setState("/projects") }}>My projects</Link>
                : state !== "/projects" ?
                    <>
                        <Link href={"/projects"} className={`text-white rounded-lg p-2 w-2/3 text-center break-words my-5 hover:bg-blue-800 bg-black relative`} onClick={() => { setState("/projects") }}>&nbsp;&nbsp;&nbsp;Return
                        <ArrowLeftEndOnRectangleIcon className={`pointer-events-none absolute left-3 top-1/2 w-6 -translate-y-1/2 ${rotate ? "rotate-90 duration-500" : "rotate-0 duration-500"} `} onClick={()=>setRotate(!rotate)}/>
                        </Link>
                        <Link href={"/dashboard"} className={LINK_STYLE} onClick={() => { setState("/dashboard") }}>My resume</Link>
                    </>
                    : <Link href={"/dashboard"} className={LINK_STYLE} onClick={() => { setState("/dashboard") }}>My resume</Link>
            }
            <Toaster />
        </div>
    )
}