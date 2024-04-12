import Link from "next/link";
import { LINK_STYLE } from "./lib/constants";

export default function Page() {
  return (
    <main className="flex justify-center items-center h-[80vh]">
      <div className="bg-white max-w-md w-full rounded-lg shadow-xl h-auto p-8">
        <h1 className="text-blue-500 text-center font-bold p-3">
          Welcome on my Portfolio !
        </h1>
        <p className="text-black text-center p-3 font-medium">Welcome to my portfolio, this will be updated each time I make a project which I think is worth to be there. This portfolio is developed in Next.JS and Tailwind.css for the frontend and the backend is in GO (Golang).</p>
        <div className="flex flex-row justify-center items-center w-full p-5 mt-2">
        <Link href={"/dashboard"} className={LINK_STYLE}>Let&apos;s explore</Link>
        </div>
      </div>
    </main>
  );
}
