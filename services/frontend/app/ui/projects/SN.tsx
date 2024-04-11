"use client"
import { CADDY_URL } from "@app/lib/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function SocialN(){
    const [authState, setAuth] = useState(false)
    const [postsState, setPosts] = useState(false)
    const [detailsState, setDetails] = useState(false)
    return (
    <>
    <h3 className="text-blue-900 font-bold text-5xl mb-8">Social Network</h3>
            <div className="bg-white shadow-xl rounded-lg flex flex-col items-center p-8 mb-8">
                <p className="mb-8 font-medium underline text-blue-700">
                    We implemented many features that a social network would have such as :
                </p>
                <div className="w-full flex flex-col items-center">
                    <button className="bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setAuth(!authState)}>Authentication (Register and Login)</button>
                    {authState ?
                        <>
                            <Image src={`${CADDY_URL}/image?opt=register.png`} alt="register page" className="mb-5 border-2" width={800} height={800} />
                            <Image src={`${CADDY_URL}/image?opt=login.png`} alt="login page" className="border-2 mb-5" width={800} height={800} />
                        </> : ""
                    }
                    <button className="bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setPosts(!postsState)}>Posts (Home page)</button>
                    {postsState ?
                        <>
                            <Image src={`${CADDY_URL}/image?opt=POSTS.png`} alt="posts page" className="mb-5 border-2" width={800} height={800} />
                        </> : ""
                    }
                    <button className="bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setDetails(!detailsState)}>Some other features (Groups, profile, groups, group-events...)</button>
                    {detailsState ?
                        <>
                            <p className="text-blue-500 font-bold text-lg p-3 underline-offset-4 underline">Profile page :</p>
                            <Image src={`${CADDY_URL}/image?opt=profile-1.png`} alt="profile page part-1" className="border-2" width={800} height={800} />
                            <Image src={`${CADDY_URL}/image?opt=profile-2.png`} alt="profile page part-1" className="mb-5 border-2" width={800} height={800} />
                        </>
                        : ""
                    }
                </div>
                <Link href={"https://drive.google.com/file/d/12vz2rdznDbNvEeHRWKgXZuGVVFb4ocAk/view?usp=sharing"} target="_blank" className="bg-blue-500 hover:bg-blue-700 font-semibold text-white p-3 rounded-lg my-5 w-full lg:w-3/4 text-center">You can see a demo of the website here</Link>
            </div>
    </>
)
}