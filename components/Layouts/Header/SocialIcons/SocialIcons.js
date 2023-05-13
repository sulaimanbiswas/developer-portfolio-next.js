import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";

const socialIcons = [
  {
    _id: 1,
    href: "https://github.com",
    name: <GithubIcon />,
  },
  {
    _id: 2,
    href: "/",
    name: <TwitterIcon />,
  },
  {
    _id: 3,
    href: "/",
    name: <LinkedInIcon />,
  },
  {
    _id: 4,
    href: "/",
    name: <PinterestIcon />,
  },
  {
    _id: 5,
    href: "/",
    name: <DribbbleIcon />,
  },
];

const SocialIcons = () => {
  return (
    <>
      {socialIcons &&
        socialIcons.map((socialIcon) => (
          <motion.a
            href={socialIcon.href}
            key={socialIcon._id}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            {socialIcon.name}
          </motion.a>
        ))}
    </>
  );
};

export default SocialIcons;
