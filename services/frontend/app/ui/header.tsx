import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-lg h-2/12">
            <nav className="py-8 px-10 flex flex-start flex-row justify-between">
                <Link href={"/dashboard"}>
                    <h1 className="text-blue-500 text-3xl font-bold">Nicolas Legay's Portfolio</h1>
                </Link>
            </nav>
        </header>
    )
}