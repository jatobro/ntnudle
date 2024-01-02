import { Inter as FontSans } from "next/font/google";
import Head from "next/head";

import { type PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

import { Footer } from "./footer";
import { NavBar } from "./nav-bar";
import { Toaster } from "./ui/toaster";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>NTNUdle</title>
        <meta name="description" content="NTNU guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={cn(
          "overflow-none flex flex-col h-screen font-sans",
          fontSans.variable,
        )}
      >
        <NavBar />
        <div className="h-full flex justify-center">{children}</div>
        <Toaster />
        <Footer />
      </main>
    </>
  );
};
