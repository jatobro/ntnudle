import Head from "next/head";
import Image from "next/image";
import { Body } from "~/components/Body";

import { ProgrammeGuesser } from "~/components/ProgrammeGuesser";

export default function Home() {
  return (
    <>
      <Head>
        <title>NTNUdle</title>
        <meta name="description" content="NTNU guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <div className="flex flex-row items-center justify-center gap-4 w-2/3">
          <div className="w-1/3 flex items-center justify-center">
            <Image src="/logo.svg" alt="logo" width={200} height={200} />
          </div>

          <h1 className="dark:text-slate-200 text-xl sm:text-3xl md:text-5xl w-1/2">
            Guess today&apos;s study programme!
          </h1>
        </div>
        <ProgrammeGuesser />
      </Body>
    </>
  );
}
