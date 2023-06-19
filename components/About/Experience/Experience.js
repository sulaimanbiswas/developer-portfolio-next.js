import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className=""
      >
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;
          <Link
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  console.log(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          Experience
        </h2>
        <div ref={ref} className="w-3/4 mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-1 h-full bg-dark origin-top"
          ></motion.div>
          <ul className="">
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            />
            <Details
              position="Intern"
              company="Facebook"
              companyLink="www.facebook.com"
              time="Summer 2021"
              address="Menlo Park, CA"
              work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
            />
            <Details
              position="Software Developer"
              company="Amazon"
              companyLink="www.amazon.com"
              time="2020-2021"
              address="Seattle, WA"
              work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
            />
            <Details
              position="Software Developer Intern"
              company="Microsoft"
              companyLink="www.microsoft.com"
              time="Summer 2019"
              address="Redmond, WA"
              work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component."
            />
            <Details
              position="Teaching Assistant"
              company="MIT"
              companyLink="www.mit.edu"
              time="Fall 2018"
              address="Massachusetts Ave, Cambridge, MA"
              work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
