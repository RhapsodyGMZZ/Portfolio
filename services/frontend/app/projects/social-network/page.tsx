"use client"
import GraphQL from "@app/ui/projects/GQL";
import SocialN from "@app/ui/projects/SN";

export default function Page() {
    
    return (
        <div className="flex flex-col flex-wrap items-center h-full w-full">
            <SocialN/>
            <GraphQL/>
        </div>
    )
}