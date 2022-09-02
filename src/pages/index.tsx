import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { status } = useSession();

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

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Generate<span className="text-purple-300">ME</span>.md
        </h1>
        {status === "authenticated" && (
          <button onClick={() => signOut()} className="btn btn-primary">
            Sign out
          </button>
        )}
        {status === "unauthenticated" && (
          <button onClick={() => signOut()} className="btn btn-primary">
            Sign out
          </button>
        )}
      </main>
    </>
  );
};

export default Home;
