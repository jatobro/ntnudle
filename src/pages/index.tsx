import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.programme.hello.useQuery({ text: "from Jakob" });

  return (
    <>
      <Head>
        <title>NTNUdle</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black">
        <div className=""></div>
      </main>
    </>
  );
}
