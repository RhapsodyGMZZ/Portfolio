"use client"

import { Context } from "@app/context"
import { API_BASE_URL } from "@app/lib/constants";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react"

export default function ContextLoader() {
    const {setJSONFile} = useContext(Context);
    const pathname = usePathname();
    
    useEffect(()=> {
        fetch(`${API_BASE_URL}/projects-json`)
        .then(async (resp)=> {
            const json_resp = await resp.json()
            setJSONFile(json_resp)
        })
        .catch((err)=> {
            console.dir(err);
        })
    }, [pathname, setJSONFile])

    return ""
}