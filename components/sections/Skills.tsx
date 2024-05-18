import React from "react";
import { Skill } from "../ui/Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section id="skills" className="relative mb-32 lg:mb-12">
      <h1 className="text-center absolute right-0 left-0 mx-auto text-5xl sm:text-7xl lg:text-9xl text-[#0000002c] dark:text-[#ffffff0e] font-bold animate__animated animate__fadeInUp -z-10">
        SKILLS
      </h1>
      <h2 className="text-2xl md:text-3xl text-center font-bold z-10 uppercase animate__animated animate__fadeInUp pt-6 lg:pt-10">
        Tec<span className="border-b-4 border-[#009945]">hnologie</span>s ?
      </h2>
      <div className="flex flex-row flex-wrap justify-between items-center my-24">
        <Skill name="HTML" width="95%" />
        <Skill name="CSS/Tailwind" width="85%" />
        <Skill name="Javascript" width="85%" />
        <Skill name="Python" width="70%" />
        <Skill name="React.js/Next.js" width="80%" />
        <Skill name="Django" width="75%" />
        <Skill name="Wordpress" width="60%" />
      </div>
    </section>
  );
};

export default Skills;
