"use client";
import { Context } from "@app/context";
import { CONTAINER, API_BASE_URL, ITEM_PROJECT } from "@app/lib/constants";
import { GithubOriginal } from "devicons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function Page() {
    const { state } = useContext(Context);
    const params = useParams();

    return (
        <div className="flex flex-col flex-wrap items-center w-full h-full">
            {state.json_file.map((element) => {
                if (element.id.toString() == params.id?.toString()) {
                    return (
                        <motion.div
                            key={element.id}
                            variants={CONTAINER}
                            initial="initial"
                            animate="animation"
                            className="flex flex-col flex-wrap items-center h-full w-full"
                        >
                            <Link href={element.github_link} target="_blank" className="flex flex-row justify-around items-center bg-slate-900 fixed top-3 right-3 rounded-lg text-white p-2 w-[10%] hover:bg-slate-700">
                                <GithubOriginal className="bg-white rounded-full"/>
                                GitHub Repo
                            </Link>
                            <motion.h3
                                variants={ITEM_PROJECT}
                                // className={`text-${element.style.color_code} font-bold text-5xl mb-8`}
                                className={`text-blue-500 font-bold text-5xl mb-8`}
                            >
                                {element.title}
                            </motion.h3>
                            <motion.div
                                variants={ITEM_PROJECT}
                                className="bg-white shadow-xl rounded-lg flex flex-col items-center p-8 mb-8 w-3/4"
                            >
                                <motion.div
                                    className="w-full flex flex-col items-center"
                                    variants={CONTAINER}
                                    initial="initial"
                                    animate="animation"
                                >
                                    {element.entire_page.main_points.map(
                                        (card) => {
                                            return (
                                                <motion.div
                                                    variants={ITEM_PROJECT}
                                                    className="w-full max-w-4xl mx-auto mb-12"
                                                    key={element.id + card.id}
                                                >
                                                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200">
                                                        {/* <h4 className={`text-2xl font-semibold text-${element.style.color_code} mb-6 text-center`}> */}
                                                        <h4 className={`text-2xl font-semibold text-blue-500 mb-6 text-center`}>
                                                            {card.title}
                                                        </h4>
                                                        
                                                        <div className="space-y-8">
                                                            {card.details?.length > 0 &&
                                                                card.details.map((detail, index) => (
                                                                    <motion.div
                                                                        key={index}
                                                                        variants={ITEM_PROJECT}
                                                                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                                                                    >
                                                                        <div 
                                                                            className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
                                                                            dangerouslySetInnerHTML={{
                                                                                __html: detail.description,
                                                                            }}
                                                                        />
                                                                        
                                                                        {detail.image && (
                                                                            <div className="mt-6 flex justify-center">
                                                                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                                                                    <img
                                                                                        src={`${API_BASE_URL}/image?opt=${detail.image}`}
                                                                                        alt={detail.image_alt || "Project image"}
                                                                                        width={800}
                                                                                        height={800}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </motion.div>
                                                                ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        }
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                }
            })}
        </div>
    );
}
