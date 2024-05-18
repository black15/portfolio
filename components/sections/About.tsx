/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="relative flex flex-col my-24">
      <h1 className="text-center absolute right-0 left-0 mx-auto text-5xl sm:text-7xl lg:text-9xl text-[#0000002c] dark:text-[#ffffff0e] font-bold animate__animated animate__fadeInUp -z-10">
        ABOUT ME
      </h1>
      <h2 className="text-2xl md:text-3xl text-center font-bold z-10 uppercase animate__animated animate__fadeInUp pt-6 lg:pt-10">
        W<span className="border-b-4 border-[#009945]">ho Am I</span> ?
      </h2>
      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between items-center mt-12 lg:mt-24 text-center lg:text-left">
        <div className="felx flex-col items-center space-y-2">
          <h1 className="text-3xl font-bold">
            I'm <span className="text-[#00bb54]">Oussama</span>, a Web Developer
          </h1>
          <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 text-left">
            I am a highly motivated and enthusiastic web developer with a
            passion for creating user-friendly, visually appealing, and
            functional websites. With 4 years of experience as a Full Stack
            Developer, I have developed a strong skillset that allows me to
            bring ideas to life on the web.
            <p className="mt-2">
              I am constantly seeking new challenges and opportunities to
              enhance my skills and grow as a professional. Whether working
              independently or as part of a team, I am dedicated to delivering
              high-quality results that exceed client expectations.
            </p>
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 border-b border-gray-700 pb-3">
            <span className="font-semibold">Name</span>: Talha Oussama
          </h2>
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 border-b border-gray-700 pt-2 pb-3">
            <span className="font-semibold">Email</span>:{" "}
            <Link
              href={"mailto:hunterofbugs61@gmail.com"}
              className="text-[#009945]"
            >
              hunterofbugs61@gmail.com
            </Link>
          </h2>
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 border-b border-gray-700 pb-3">
            <span className="font-semibold">Age</span>: 22
          </h2>
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 border-b border-gray-700 pb-3">
            <span className="font-semibold">From</span>: Algeria
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
