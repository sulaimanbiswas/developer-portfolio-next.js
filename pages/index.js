import AnimatedText from "@/components/Home/AnimatedText";
import Layout from "@/components/Layouts/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/profile/developer-pic-1.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Developer Portfolio</title>
        <meta name="description" content="Developer Portfolio Website" />
        <meta
          name="keywords"
          content="Portfolio, Portfolio Website, Developer Portfolio, Developer Portfolio Website"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="Developer Portfolio"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 gap-4">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-border ease-linear duration-300"
                >
                  Resume
                </Link>
                <Link
                  href="mailto:abcd@gmail.com"
                  target={"_blank"}
                  className="flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light border-2 border-solid border-dark hover:border-dark transition-border ease-linear duration-300"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
