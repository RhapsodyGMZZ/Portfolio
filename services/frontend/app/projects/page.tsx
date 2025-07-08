"use client";
import { Context } from "@app/context";
import { IMAGE_CADDY_URL, CONTAINER, ITEM } from "@app/lib/constants";
import { jsonFile } from "@app/lib/definitions";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Page() {
    const router = useRouter();
    const { state } = useContext(Context);
    const json_file = state.json_file as jsonFile;
    return (
        <motion.div
            variants={CONTAINER}
            initial="initial"
            animate="animation"
            className="flex flex-col w-full justify-around items-center"
        >
            {   json_file.map((element, index) => {
                return (
                    <motion.div
                        key = {index}
                        variants={ITEM}
                        className="flex flex-row flex-wrap bg-white rounded-lg shadow-xl w-full md:w-1/2 p-5 mb-8"
                        whileHover={{ scale: 1.1, cursor: "pointer" }}
                        onClick={() =>
                            router.replace(`/projects/${element.URL}`)
                        }
                    >
                        <h3 className="text-red-500 font-bold text-lg p-3">
                            {element.title}
                        </h3>
                        <p className="text-black p-3">
                            {element["projects-page"]["short-description"]}
                        </p>
                        <Image
                            src={`${IMAGE_CADDY_URL}/image?opt=${element["projects-page"]["description-img"]}`}
                            alt="image of Rust's rocket framework design"
                            width={1100}
                            height={1100}
                            className="m-auto p-4"
                        />
                    </motion.div>
                );
            })
        }
        </motion.div>
    );
}
