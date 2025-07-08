"use client"
import { IMAGE_CADDY_URL, CONTAINER, ITEM } from "@app/lib/constants"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
export default function GraphQL() {
    const [authState, setAuth] = useState(false)
    const [homeState, setHome] = useState(false)
    return (
        <>
            <motion.h3 variants={ITEM} className="text-blue-900 font-bold text-5xl mb-8">GraphQL</motion.h3>
            <motion.div variants={ITEM} className="bg-white shadow-xl rounded-lg flex flex-col items-center p-8 w-3/4">
                <p className="mb-8 font-medium underline text-black">
                    I use a lot of the Zone01&apos;s GraphQL DB to display it on my website. Here is some photos
                </p>
                <motion.div className="w-full flex flex-col items-center" variants={CONTAINER} initial="initial" animate="animation">
                    <button className="relative bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setAuth(!authState)}>Authentication (Login via the Zone01 auth api )
                        <ArrowRightIcon className={`pointer-events-none absolute right-3 top-1/2 w-6 -translate-y-1/2 ${authState ? "rotate-90 duration-500" : "rotate-0 duration-500"} `} />
                    </button>
                    {authState &&
                        <motion.div variants={ITEM}>
                            <Image src={`${IMAGE_CADDY_URL}/image?opt=graphQL.png`} alt="login page" className="mb-5 border-2" width={800} height={800} />
                        </motion.div>
                    }
                    <button className="relative bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setHome(!homeState)}>Home page with some infos about my Zone01 platform&apos;s account
                        <ArrowRightIcon className={`pointer-events-none absolute right-3 top-1/2 w-6 -translate-y-1/2 ${homeState ? "rotate-90 duration-500" : "rotate-0 duration-500"} `} />
                    </button>
                    {homeState &&
                        <>
                            <motion.p variants={ITEM} className="border-blue-500 text-center border p-4 rounded-lg text-black w-3/4 mb-3">As you can see, this is a simple project where you manipulate some data with GraphQL queries.</motion.p>
                            <motion.div variants={ITEM}>
                                <Image src={`${IMAGE_CADDY_URL}/image?opt=graphql-home.png`} alt="posts page" className="mb-5 border-2" width={800} height={800} />
                                <Image src={`${IMAGE_CADDY_URL}/image?opt=graph-projects.png`} alt="posts page" className="mb-5 border-2" width={800} height={800} />
                            </motion.div>
                        </>
                    }
                </motion.div>
            </motion.div>
        </>
    )
}