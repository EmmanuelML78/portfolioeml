import React from "react";
import { motion } from "framer-motion";
import Tech from "./data/skills";
import Image from "next/image";

const Skill = ({ name, url }) => {
  return (
    <motion.div
      className="w-32 h-40 bg-light  rounded-md 
    shadow-md relative border border-dark
    flex flex-col items-center justify-center
    cursor-pointer hover:shadow-xl md:w-28 md:h-36 sm:w-24 sm:h-32 xs:w-20 xs:h-28 xxs:w-16 xxs:h-24 dark:bg-dark dark:border-light">
      <Image src={url} alt={name} className="w-[90%] " />
      <h2 className="text-dark  font-semibold text-sm mt-2 md:text-xs sm:text-xs xs:text-xs xxs:text-xs dark:text-light">
        {name}
      </h2>
      <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[102%] rounded-lg bg-dark dark:bg-light " />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2
        className="font-bold text-8xl mt-16 w-full text-center md:text-6xl
      md:mt-12">
        Skills
      </h2>
      <div
        className="w-full flex flex-wrap gap-8 p-4 py-8 justify-center mt-16 rounded-md 
        ">
        {Tech.map((skill, index) => (
          <Skill key={index} name={skill.name} url={skill.url} />
        ))}
      </div>
    </>
  );
};

export default Skills;
