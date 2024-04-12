"use client"
import About from "@app/ui/dashboard/about";
import Socials from "@app/ui/dashboard/social_media";
import Skills from "@app/ui/dashboard/skills";
import {motion} from "framer-motion"
import { CONTAINER, ITEM } from "@app/lib/constants";
export default function Page() {
    return (
        <motion.div variants={CONTAINER} initial="initial" animate="animation" className="w-auto flex flex-col-reverse lg:flex-row flex-wrap justify-around">
            <div className="flex flex-col w-full lg:w-1/2 justify-between mb-8 lg:mb-0">
                <About />
                <Skills />
            </div>
            <Socials />
        </motion.div>
    )
}