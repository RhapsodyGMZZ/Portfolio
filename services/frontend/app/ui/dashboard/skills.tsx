import { ITEM } from "@app/lib/constants";
import {
    COriginal,
    CplusplusOriginal,
    DjangoPlainWordmark,
    DockerOriginalWordmark,
    FlaskOriginalWordmark,
    GoOriginalWordmark,
    JavascriptOriginal,
    KubernetesOriginalWordmark,
    MysqlOriginalWordmark,
    NextjsOriginalWordmark,
    PostgresqlOriginalWordmark,
    PythonOriginalWordmark,
    RabbitmqOriginalWordmark,
    ReactOriginalWordmark,
    RustOriginal,
    TypescriptOriginal,
    VagrantOriginalWordmark,
} from "devicons-react";
import { motion } from "framer-motion";
export default function Skills() {
    return (
        <motion.div
            variants={ITEM}
            className="bg-white shadow-lg rounded-lg h-auto p-3 mt-3"
        >
            <h3 className="text-blue-500 font-bold text-xl mb-4">
                Programming skills :
            </h3>
            <p className=" text-black font-medium italic">Languages :</p>
            <div className="flex flex-row flex-wrap w-full justify-evenly items-center">
                <COriginal size={50} className="mx-4 my-3" />
                <CplusplusOriginal size={50} className="mx-4 my-3" />
                <GoOriginalWordmark size={50} className="mx-4 my-3" />
                <JavascriptOriginal size={50} className="mx-4 my-3" />
                <TypescriptOriginal size={50} className="mx-4 my-3" />
                <PythonOriginalWordmark size={60} className="mx-4 my-3" />
                <RustOriginal size={50} className="mx-4 my-3" />
            </div>
            <p className="text-black font-medium italic">
                Frameworks and Data :
            </p>
            <div className="flex flex-row flex-wrap w-full justify-evenly items-center">
                <MysqlOriginalWordmark size={90} className="mx-4 my-3" />
                <PostgresqlOriginalWordmark size={90} className="mx-4 my-3" />
                <ReactOriginalWordmark size={70} className="mx-4 my-3" />
                <NextjsOriginalWordmark size={100} className="mx-4 my-3" />
                <DjangoPlainWordmark size={80} className="mx-4 my-3" />
                <FlaskOriginalWordmark size={80} className="mx-4 my-3" />
            </div>
            <p className="text-black font-medium italic">DevOps :</p>
            <div className="flex flex-row flex-wrap w-full justify-evenly items-center">
                <DockerOriginalWordmark size={90} className="mx-4 my-3" />
                <VagrantOriginalWordmark size={110} className="mx-4 my-3" />
                <span className="flex flex-col-reverse items-center">
                    <ruby>(learning)</ruby>
                    <KubernetesOriginalWordmark
                        size={100}
                        className="mx-4 my-3"
                    />
                </span>
                <RabbitmqOriginalWordmark size={100} className="mx-4 my-3" />
            </div>
        </motion.div>
    );
}
