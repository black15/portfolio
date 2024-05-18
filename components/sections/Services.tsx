/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdOutlineDraw } from "react-icons/md";
import { FaWordpressSimple } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services" className="relative flex flex-col my-32 lg:my-24">
      <h1 className="text-center absolute right-0 left-0 mx-auto text-5xl sm:text-7xl lg:text-9xl text-[#0000002c] dark:text-[#ffffff0e] font-bold animate__animated animate__fadeInUp -z-10">
        SERVICES
      </h1>
      <h2 className="text-2xl md:text-3xl text-center font-bold z-10 uppercase animate__animated animate__fadeInUp pt-6 lg:pt-10">
        W<span className="border-b-4 border-[#009945]">hat I Offer</span> ?
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center mt-24 md:space-y-0">
        <div className="flex flex-row items-center space-x-8 pb-6 md:pb-0">
          <div className="dark:bg-gray-800 p-3 md:mb-16 mb-20 rounded">
            <HiComputerDesktop fontSize={45} color={"#00bb54"} />
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-medium">Web Developement</h1>
            <p className="lg:max-w-lg text-lg text-gray-700 dark:text-gray-300">
              Crafting dynamic, responsive websites and web apps with expertise
              in various languages and frameworks, ensuring seamless performance
              across platforms.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <div className="dark:bg-gray-800 p-3 md:mb-16 mb-20 rounded lg:mt-0 mt-6">
            <MdOutlineDraw fontSize={45} color={"#00bb54"} />
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-medium">UI/UX Design</h1>
            <p className="max-w-lg text-lg text-gray-700 dark:text-gray-300">
              Creating visually stunning interfaces with a focus on intuitive
              navigation and user satisfaction, from wireframes to final design
              implementation.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <div className="dark:bg-gray-800 p-3 md:mb-16 mb-20 rounded mt-6">
            <FaWordpressSimple fontSize={45} color={"#00bb54"} />
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-medium mt-6">Wordpress</h1>
            <p className="max-w-lg text-lg text-gray-700 dark:text-gray-300">
              Customizing WordPress sites to meet unique needs, from blogs to
              e-commerce platforms, ensuring flexibility and functionality.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <div className="dark:bg-gray-800 p-3 md:mb-16 mb-20 rounded mt-6">
            <SiTryhackme fontSize={45} color={"#00bb54"} />
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-medium mt-6">Penetration Testing</h1>
            <p className="max-w-lg text-lg text-gray-700 dark:text-gray-300">
              Identifying and addressing vulnerabilities in web applications and
              infrastructure to enhance security defenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
