import Education from "@/components/About/Education/Education";
import Experience from "@/components/About/Experience/Experience";
import Skills from "@/components/About/Skills/Skills";
import AnimatedText from "@/components/Home/AnimatedText";
import Layout from "@/components/Layouts/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import aboutPic from "../public/images/profile/developer-pic-2.jpg";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      ref.current.textContent = Math.round(latest);
    });
  }, [springValue]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About - Developer Portfolio</title>
        <meta name="description" content="Developer Portfolio Website" />
        <meta
          name="keywords"
          content="Portfolio, Portfolio Website, Developer Portfolio, Developer Portfolio Website"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="w-full grid grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <div className="flex flex-col gap-4">
                <p className="font-medium">
                  Hi, I am CodeBucks, a web developer and UI/UX designer with a
                  passion for creating beautiful, functional, and user-centered
                  digital experiences. With 4 years of experience in the field.
                  I am always looking for new and innovative ways to bring my
                  clients visions to life.
                </p>
                <p className="font-medium">
                  I believe that design is about more than just making things
                  look pretty – it is about solving problems and creating
                  intuitive, enjoyable experiences for users.
                </p>
                <p className="font-medium">
                  Whether I am working on a website, mobile app, or other
                  digital product, I bring my commitment to design excellence
                  and user-centered thinking to every project I work on. I look
                  forward to the opportunity to bring my skills and passion to
                  your next project.
                </p>
              </div>
            </div>
            <div className="col-span-3 relative h-max rounded-[2rem] border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark"></div>
              <Image
                src={aboutPic}
                alt="Developer Portfolio"
                className="h-full rounded-2xl w-auto"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Client
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
