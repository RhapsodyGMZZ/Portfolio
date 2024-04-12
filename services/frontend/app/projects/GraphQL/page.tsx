"use client"
import { CONTAINER } from "@app/lib/constants";
import GraphQL from "@app/ui/projects/GQL";
import {motion} from "framer-motion"
export default function Page(){
    return(
        <motion.div variants={CONTAINER} initial="initial" animate="animation" className="flex flex-col flex-wrap items-center h-full w-full">
            <GraphQL/>
        </motion.div>
    )
}