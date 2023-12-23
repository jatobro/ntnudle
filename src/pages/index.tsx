import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  const { data, isLoading } = api.programme.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Something went wrong</div>;

  return (
    <>
      <Head>
        <title>NTNUdle</title>
        <meta name="description" content="NTNU guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen dark:bg-slate-800 dark:text-white">
        HELLLOOOO
      </main>
    </>
  );
}
