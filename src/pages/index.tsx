import Head from "next/head";

import { Introduction } from "~/components/Introduction";
import { ProgrammeGuesser } from "~/components/ProgrammeGuesser";

export default function Home() {
  return (
    <>
      <Head>
        <title>NTNUdle</title>
        <meta name="description" content="NTNU guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Introduction />
        <ProgrammeGuesser />
      </main>
    </>
  );
}
