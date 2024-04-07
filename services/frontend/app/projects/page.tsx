"use client";
import {motion} from "framer-motion";

export default function Page(){
    return(
        <motion.div className="flex flex-row flex-wrap bg-white rounded-lg shadow-xl w-full md:w-1/2 m-auto">
            <h3 className="border-b text-purple-700 font-bold text-lg">Social Network</h3>
        </motion.div>
    )
}