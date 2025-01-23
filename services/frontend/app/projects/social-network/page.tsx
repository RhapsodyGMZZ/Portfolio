"use client"
import { CONTAINER } from "@app/lib/constants";
import SocialN from "@app/ui/projects/SN";
import {motion} from "framer-motion"
export default function Page() {

    return (
            <motion.div variants={CONTAINER} initial="initial" animate="animation" className="flex flex-col flex-wrap items-center h-full w-full">
                <SocialN />
            </motion.div>
    )
}