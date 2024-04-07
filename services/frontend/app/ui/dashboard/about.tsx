import Link from "next/link";

export default function About() {
    return (
        <div className="bg-white rounded-lg shadow-xl flex flex-col p-3 justify-start h-fit mt-5 lg:mt-0">
            <h3 className="text-blue-700 font-bold text-xl underline-offset-8 underline h-fit mb-8">About me :</h3>
            <p className="text-blue-500 text-md">I'm currently studying at Zone01 Normandie to become a <span className="font-bold">full-stack developper</span>.&nbsp;
            <Link href={"https://zone01rouennormandie.org/"} target="_blank" className="hover:font-bold underline underline-offset-4">Zone01</Link> is a 2-years training program
            where you need to achieve 55+ projects in differents languages like C, C++, Go, JavaScript, Rust... And it's leading the trainee to a job promise at 
            the end of the program.
            </p>
        </div>
    )
}