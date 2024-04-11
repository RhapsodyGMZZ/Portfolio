"use client"
import { CADDY_URL } from "@app/lib/constants"
import Image from "next/image"
import { useState } from "react"

export default function GraphQL() {
    const [authState, setAuth] = useState(false)
    const [homeState, setHome] = useState(false)
    return (
        <>
            <h3 className="text-blue-900 font-bold text-5xl mb-8">GraphQL</h3>
            <div className="bg-white shadow-xl rounded-lg flex flex-col items-center p-8">
                <p className="mb-8 font-medium underline text-blue-700">
                    I use a lot of the Zone01's GraphQL DB to display it on my website. Here is some photos
                </p>
                <div className="w-full flex flex-col items-center">
                    <button className="bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setAuth(!authState)}>Authentication (Login via the Zone01 auth api )</button>
                    {authState ?
                        <>
                            <Image src={`${CADDY_URL}/image?opt=graphQL.png`} alt="login page" className="mb-5 border-2" width={800} height={800} />
                        </> : ""
                    }
                    <button className="bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setHome(!homeState)}>Home page with some infos about my Zone01 platform's account</button>
                    {homeState ?
                        <>
                            <p className="border-blue-500 text-center border p-4 rounded-lg text-blue-700 w-3/4 mb-3">As you can see, this is a simple project where you manipulate some data with GraphQL queries.</p>
                            <Image src={`${CADDY_URL}/image?opt=graphql-home.png`} alt="posts page" className="mb-5 border-2" width={800} height={800} />
                            <Image src={`${CADDY_URL}/image?opt=graph-projects.png`} alt="posts page" className="mb-5 border-2" width={800} height={800} />
                        </> : ""
                    }
                </div>
            </div>
        </>
    )
}