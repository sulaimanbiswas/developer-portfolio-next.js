import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Developer Portfolio</title>
        <meta name="description" content="Developer Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
