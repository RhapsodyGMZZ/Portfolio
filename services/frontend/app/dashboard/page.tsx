"use client"
import { COriginal, DjangoPlainWordmark, GoOriginalWordmark, JavascriptOriginal, NextjsOriginal, PythonOriginalWordmark, ReactOriginal, SqliteOriginalWordmark, TypescriptOriginal } from "devicons-react";
import About from "@app/ui/dashboard/about";
import Socials from "@app/ui/dashboard/social_media";

export default function Page() {
    return (
        <div className="w-auto flex flex-col md:flex-row flex-wrap justify-around">
            <div className="flex flex-row flex-wrap justify-around">
                <div className="flex flex-col w-1/2 justify-between">
                    <About />
                    <div className="bg-white shadow-lg rounded-lg h-1/2 p-8">
                        <h3 className="text-blue-700 underline underline-offset-8 font-bold text-xl mb-4">Programming skills :</h3>
                        <p className="text-blue-500 underline underline-offset-4 font-medium italic">Languages :</p>
                        <div className="flex flex-row flex-wrap w-full justify-evenly items-center">
                            <COriginal size={50} className="mx-4 my-3" />
                            <GoOriginalWordmark size={50} className="mx-4 my-3" />
                            <JavascriptOriginal size={50} className="mx-4 my-3" />
                            <TypescriptOriginal size={50} className="mx-4 my-3" />
                            <PythonOriginalWordmark size={60} className="mx-4 my-3" />
                        </div>
                        <p className="text-blue-500 underline underline-offset-4 font-medium italic">Frameworks and Data :</p>
                        <div className="flex flex-row flex-wrap w-full justify-evenly items-center">
                            <SqliteOriginalWordmark size={90} className="mx-4 my-3" />
                            <ReactOriginal size={50} className="mx-4 my-3" />
                            <NextjsOriginal size={50} className="mx-4 my-3" />
                            <DjangoPlainWordmark size={60} className="mx-4 my-3" />
                        </div>
                    </div>
                </div>
                <Socials />
            </div>
        </div>
    )
}