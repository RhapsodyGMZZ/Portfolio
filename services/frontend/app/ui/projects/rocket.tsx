"use client"
import { IMAGE_CADDY_URL, CONTAINER, ITEM } from "@app/lib/constants"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
export default function Rocket() {
    const [authState, setAuth] = useState(false);
    const [postsState, setPosts] = useState(false);
    const [detailsState, setDetails] = useState(false);
    

    return (
        <>  
            {

            }
            <motion.h3 variants={ITEM} className="text-blue-500 font-bold text-5xl mb-8">Social Network</motion.h3>
            <motion.div variants={ITEM} className="bg-white shadow-xl rounded-lg flex flex-col items-center p-8 mb-8 w-3/4">
                <motion.div className="w-full flex flex-col items-center" variants={CONTAINER} initial="initial" animate="animation">
                    <button className="relative bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setAuth(!authState)}>Authentication
                        (Register and Login)
                        <ArrowRightIcon className={`pointer-events-none absolute right-3 top-1/2 w-6 -translate-y-1/2 ${authState ? "rotate-90 duration-500" : "rotate-0 duration-500"} `} />
                    </button>
                    {authState &&
                        <motion.div variants={ITEM}>
                            <Image src={`${IMAGE_CADDY_URL}/image?opt=register.png`} alt="register page" className="mb-5 border-2" width={800} height={800} />
                            <Image src={`${IMAGE_CADDY_URL}/image?opt=login.png`} alt="login page" className="border-2 mb-5" width={800} height={800} />
                        </motion.div> 
                    }
                    <button className="relative bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setPosts(!postsState)}>Posts (Home page)
                        <ArrowRightIcon className={`pointer-events-none absolute right-3 top-1/2 w-6 -translate-y-1/2 ${postsState ? "rotate-90 duration-500" : "rotate-0 duration-500"} `} />
                    </button>
                    {postsState &&
                        <motion.div variants={ITEM}>
                            <Image src={`${IMAGE_CADDY_URL}/image?opt=POSTS.png`} alt="posts page" className="mb-5 border-2" width={800} height={800} />
                        </motion.div> 
                    }
                    <button className="relative bg-blue-500 font-semibold text-white p-3 rounded-lg mb-5 w-full lg:w-3/4 hover:bg-blue-700" onClick={() => setDetails(!detailsState)}>Some other features (Groups, profile, groups, group-events...)
                        <ArrowRightIcon className={`pointer-events-none absolute right-3 top-1/2 w-6 -translate-y-1/2 ${detailsState ? "rotate-90 duration-500" : "rotate-0 duration-500"} `} />
                    </button>
                    {detailsState &&
                        <motion.div variants={ITEM}>
                            <p className="text-blue-500 font-bold text-lg p-3 underline-offset-4 underline">Profile page :</p>
                            <Image src={`${IMAGE_CADDY_URL}/image?opt=profile-1.png`} alt="profile page part-1" className="border-2" width={800} height={800} />
                            <Image src={`${IMAGE_CADDY_URL}/image?opt=profile-2.png`} alt="profile page part-1" className="mb-5 border-2" width={800} height={800} />
                        </motion.div>
                        
                    }
                </motion.div>
                <Link href={"https://drive.google.com/file/d/12vz2rdznDbNvEeHRWKgXZuGVVFb4ocAk/view?usp=sharing"} target="_blank" className="text-blue-500 hover:text-blue-700 font-semibold underline p-3 rounded-lg my-5 w-full lg:w-3/4 text-center">You can see a demo of the website here</Link>
            </motion.div>
        </>
    )
}