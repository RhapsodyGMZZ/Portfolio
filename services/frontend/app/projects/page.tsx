"use client";
import { CADDY_URL, CONTAINER, ITEM } from "@app/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <motion.div variants={CONTAINER} initial="initial" animate="animation" className="flex flex-col w-full justify-around items-center">
            <motion.div variants={ITEM} className="flex flex-row flex-wrap bg-white rounded-lg shadow-xl w-full md:w-1/2 p-5 mb-8" whileHover={{ scale: 1.1 }}>
                <h3 className="text-blue-500 font-bold text-lg p-3">Social Network</h3>
                <p className="text-black p-3">This was a project where we needed (in a group of 4) to re-create a Facebook-like Social Network. we decided to use the <span className="font-bold text-blue-500">Next.js framework</span>. You can click <Link href={"/projects/social-network"} className="text-blue-500 hover:text-blue-800" >here </Link>
                    to see more infos about this project.</p>
                <Image src={`${CADDY_URL}/image?opt=POSTS.png`} alt="image of the social-network's main page" width={1100} height={1100} className="m-auto p-4" />
            </motion.div>
            <motion.div variants={ITEM} className="flex flex-row flex-wrap bg-white rounded-lg shadow-xl w-fit md:w-1/2 p-5" whileHover={{ scale: 1.1 }}>
                <h3 className="text-blue-500 font-bold text-lg p-3">GraphQL</h3>
                <p className="text-black p-3">This was a project where we needed to use the school&apos;s API to gather some infos about our school profile. We were prompted to use <span className="font-bold text-blue-500">GraphQL queries</span> to get access to the data. You can click <Link href={"/projects/GraphQL"} className="text-blue-500 hover:text-blue-800">here </Link>
                    to see more infos about this project.</p>
                <Image src={`${CADDY_URL}/image?opt=graphQL.png`} alt="image of the social-network's main page" width={1100} height={1100} className="m-auto p-4" />
            </motion.div>
        </motion.div>
    )
}