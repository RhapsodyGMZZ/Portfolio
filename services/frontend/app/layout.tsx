import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ContextProvider } from "./context";
import ContextLoader from "./components/context-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "N.Legay's Portfolio",
    description: "Developped in Next.JS and GO",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-slate-50`}>
                <ContextProvider>
                  <ContextLoader />
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </ContextProvider>
            </body>
        </html>
    );
}
