import { ITEM } from "@app/lib/constants";
import { COriginal, DjangoPlainWordmark, GoOriginalWordmark, JavascriptOriginal, NextjsOriginal, PythonOriginalWordmark, ReactOriginal, SqliteOriginalWordmark, TypescriptOriginal } from "devicons-react";
import {motion} from "framer-motion"
export default function Skills() {
    return (
        <motion.div variants={ITEM} className="bg-white shadow-lg rounded-lg h-auto p-3 mt-3">
            <h3 className="text-blue-500 font-bold text-xl mb-4">Programming skills :</h3>
            <p className=" text-black font-medium italic">Languages :</p>
            <div className="flex flex-row flex-wrap w-full justify-evenly items-center">
                {/* <COriginal size={50} className="mx-4 my-3" /> */}
                <GoOriginalWordmark size={50} className="mx-4 my-3" />
                <JavascriptOriginal size={50} className="mx-4 my-3" />
                <TypescriptOriginal size={50} className="mx-4 my-3" />
                <PythonOriginalWordmark size={60} className="mx-4 my-3" />
            </div>
            <p className="text-black font-medium italic">Frameworks and Data :</p>
            <div className="flex flex-row flex-wrap w-full justify-evenly items-center">
                <SqliteOriginalWordmark size={90} className="mx-4 my-3" />
                <ReactOriginal size={50} className="mx-4 my-3" />
                <NextjsOriginal size={50} className="mx-4 my-3" />
                <DjangoPlainWordmark size={60} className="mx-4 my-3" />
            </div>
        </motion.div>
    )
}