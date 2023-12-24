import Head from "next/head";
import { SearchBar } from "~/components/SearchBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>NTNUdle</title>
        <meta name="description" content="NTNU guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-slate-800 dark:text-white flex flex-col items-center justify-around flex-1">
        <h1 className="text-5xl">Guess today&apos;s study programme!</h1>
        <SearchBar />
        <div></div>
      </main>
    </>
  );
}
