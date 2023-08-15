import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>perf-test</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
      >
        <h1>perf-test</h1>
      </main>
    </>
  );
}
