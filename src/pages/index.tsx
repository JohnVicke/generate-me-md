import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/documents");
    return null;
  }

  return (
    <>
      <Head>
        <title>Generate.me</title>
        <meta
          name="description"
          content="Github.com README.md generator for managing and creating beautiful README.md files"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Generate<span className="text-purple-300">ME</span>.md
        </h1>
      </main>
    </>
  );
};

export default Home;
