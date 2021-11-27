import * as React from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Sooj Stitch</title>
        <meta name="description" content="Welcome to sooj stitch" />
      </Head>
      <div className="container mx-auto h-screen pt-6 flex flex-col dark:bg-black">
        <NavBar />

        <div
          className="flex justify-between flex-wrap pl-3"
          style={{ paddingTop: "60px" }}
        >
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="text-5xl font-extrabold ...">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Welcome to{" "}
                <a className="text-blue-600" href="/">
                  Sooj Stitch
                </a>{" "}
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                  hey hey
                </button>
              </span>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
