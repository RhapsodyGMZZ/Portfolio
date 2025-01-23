import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";
import Loading from "./loading";

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
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
