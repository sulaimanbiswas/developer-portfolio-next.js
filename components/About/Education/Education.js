import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "../Experience/LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl ">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
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
          Education
        </h2>
        <div ref={ref} className="w-3/4 mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-1 h-full bg-dark origin-top"
          ></motion.div>
          <ul className="">
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            />
            <Details
              type="Master Of Computer Science"
              time="2020-2022"
              place="Stanford University"
              info="Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding."
            />
            <Details
              type="Online Coursework"
              time="2016-2020"
              place="Coursera And EdX"
              info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
