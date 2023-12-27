import { type PropsWithChildren } from "react";

import { Footer } from "./footer-comp";
import { NavBar } from "./nav-bar";

import { Inter as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main
      className={cn(
        "overflow-none flex flex-col h-screen font-sans",
        fontSans.variable,
      )}
    >
      <NavBar />
      <div className="h-full flex flex-col items-center justify-around">
        {children}
      </div>
      <Footer />
    </main>
  );
};
