"use client"
import Image from "next/image";
import { CADDY_URL } from "@app/lib/constants";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { motion } from "framer-motion"

export default function Socials() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col w-1/4 h-fit">
            <Image src={`${CADDY_URL}/image?opt=avatar`} width={200} height={200} alt="Photo of me" className="rounded-xl mb-4 self-center" />
            <h3 className="text-blue-700 font-bold py-5 text-xl underline underline-offset-4">Socials</h3>
            <motion.div className="flex flex-row w-full mb-5" whileHover={{ scale: 1.1, translateX: 10 }}>
                <SocialIcon network="github" style={{ width: 25, height: 25 }} url="https://github.com/RhapsodyGMZZ" />
                <Link href={"https://github.com/RhapsodyGMZZ"} className="ml-3">GitHub</Link>
            </motion.div>
            <motion.div initial={{ size: 30 }} whileHover={{ scale: 1.1, translateX: 10 }} className="flex flex-row w-full">
                <SocialIcon style={{ width: 25, height: 25 }} url="https://www.linkedin.com/in/nicolas-legay-b11103293/" />
                <Link href={"https://www.linkedin.com/in/nicolas-legay-b11103293/"} className="ml-3">LinkedIn</Link>
            </motion.div>
        </div>)
}