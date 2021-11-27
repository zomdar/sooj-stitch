import Head from "next/head";

export default function Home() {
  const Home = dynamic(() => import("./home"));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sooj Stitch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  );
}
