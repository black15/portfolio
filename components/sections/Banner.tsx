/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import "animate.css";
import { TypeAnimation } from "react-type-animation";
import banner from "../../public/img/banner.svg";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div
      id="home"
      className="flex items-center justify-between my-12 lg:my-24 px-2 md:px-2"
    >
      <div className="flex flex-col space-y-3 animate__animated animate__flipInX">
        <h3 className="text-2xl font-medium">Hello,</h3>
        <h1 className={`text-6xl md:text-8xl font-lobster`}>
          I'm <span className="text-[#00e064]">Oussama </span>
        </h1>
        <TypeAnimation
          className={`font-fjalla`}
          // Same String at the start will only be typed once, initially
          sequence={[
            "a Full Stack Developer",
            3000,
            "a Wordpress Developer",
            3000,
            "a Web Designer",
            3000,
            "a Penetration Tester",
            3000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: "2.7em" }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
        <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Welcome to my corner of the web! With over four years of hands-on
          experience in web development, I bring a passion for crafting
          intuitive, user-friendly websites and applications. Specializing in
          WordPress development, I blend creativity with technical expertise to
          bring your digital vision to life.
        </p>
      </div>
      <div className="absolute -z-10 opacity-20 dark:opacity-5 md:opacity-100 md:dark:opacity-100 md:relative md:block px-6">
        <Image
          className="animate__animated animate__pulse animate__infinite animate__slow"
          src={banner}
          alt="Banner Image"
          width={500}
          height={222}
        />
      </div>
    </div>
  );
};

export default Banner;
