import { API_BASE_URL } from "@app/lib/constants";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-lg h-2/12">
            <nav className="py-8 px-10 flex flex-start flex-row items-center relative">
                <img src={`${API_BASE_URL}/image?opt=avatar-header`} alt="Little avatar with my picture in it" width={50} height={50} className=" absolute border border-blue-500 rounded-full"/>
                <Link href={"/dashboard"}>
                    <h1 className="text-blue-500 text-3xl font-bold ml-16">Nicolas Legay&apos;s Portfolio</h1>
                </Link>
            </nav>
        </header>
    )
}