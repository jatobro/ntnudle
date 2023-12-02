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
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black">
        <div>
          <div className="text-white">Study programmes of NTNU:</div>
          {data.map((programme) => (
            <div className="text-white" key={programme.id}>
              {programme.name}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
