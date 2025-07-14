"use client"

import { Context } from "@app/context"
import { API_BASE_URL } from "@app/lib/constants";
import { useContext, useEffect } from "react"

export default function ContextLoader() {
    const {state, setJSONFile} = useContext(Context);
    
    useEffect(()=> {
        if (state.json_file.length === 0) {
            fetch(`${API_BASE_URL}/projects-json`)
            .then(async (resp)=> {
                const json_resp = await resp.json()
                setJSONFile(json_resp)
            })
            .catch((err)=> {
                console.dir(err);
            })
        }
    }, [setJSONFile, state.json_file.length])

    return null
}