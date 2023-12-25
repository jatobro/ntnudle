import Head from "next/head";
import Image from "next/image";

import { ProgrammeGuesser } from "~/components/ProgrammeGuesser";

export default function Home() {
  return (
    <>
      <Head>
        <title>NTNUdle</title>
        <meta name="description" content="NTNU guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-start flex-1 p-10 gap-10">
        <div className="flex flex-row items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
          <h1 className="text-5xl dark:text-slate-200 w-96">
            Guess today&apos;s study programme!
          </h1>
        </div>
        <ProgrammeGuesser />
      </main>
    </>
  );
}
