/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Blog from "../../public/img/blog.png";
import Nexterce from "../../public/img/nexterce.png";
import Forniture from "../../public/img/forniture.png";
import ZEdition from "../../public/img/zedition.png";
import Porftolio from "../../public/img/portfolio.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section id="projects" className="relative flex flex-col my-32 lg:my-24">
      <h1 className="text-center absolute right-0 left-0 mx-auto text-5xl sm:text-7xl lg:text-9xl text-[#0000002c] dark:text-[#ffffff0e] font-bold animate__animated animate__fadeInUp -z-10">
        PORTFOLIO
      </h1>
      <h2 className="text-2xl md:text-3xl text-center font-bold z-10 uppercase animate__animated animate__fadeInUp pt-6 lg:pt-10">
        My <span className="border-b-4 border-[#009945]">Wor</span>ks
      </h2>
      <div className="flex flex-col items-center gap-12 mt-32">
        <div className="w-full flex flex-row items-center justify-between">
          <Link href={"https://nexterce.vercel.app/"} target="_blank">
            <Image
              src={Nexterce}
              alt="Portfolio"
              className="w-[500px] h-auto bg-cyan-500 shadow-xl shadow-[#009945]/70 transition-all duration-300 ease-in-out transform perspective-250 hover:scale-105"
            />
          </Link>
          <div className="max-w-xl dark:text-gray-50 text-gray-800 text-3xl font-poppins font-medium">
            Ecommerce website supports dark/light mode built with Next.js 13,
            Tailwind CSS and GraphQL CMS
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          <Link
            href={"https://github.com/black15/luxury_marketplace"}
            target="_blank"
          >
            <Image
              src={ZEdition}
              alt="Portfolio"
              className="w-[500px] h-auto bg-cyan-500 shadow-xl shadow-[#009945]/70 transition-all duration-300 ease-in-out transform perspective-250 hover:rotate-y-25"
            />
          </Link>
          <div className="max-w-xl dark:text-gray-50 text-gray-800 text-3xl font-poppins font-medium">
            Luxury Marketplace build with HTML/CSS, Javascript and PHP for a
            client
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          <Link href={"https://webportfolio-wine.vercel.app/"} target="_blank">
            <Image
              src={Porftolio}
              alt="Portfolio"
              className="w-[500px] h-auto bg-cyan-500 shadow-xl shadow-[#009945]/70 transition-all duration-300 ease-in-out transform perspective-250 hover:scale-105"
            />
          </Link>
          <div className="max-w-xl dark:text-gray-50 text-gray-800 text-3xl font-poppins font-medium">
            My Portfolio Supports Light/Dark mode built with Next.js 13 and
            Tailwind CSS
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          <Link href={"https://github.com/black15/waitex"} target="_blank">
            <Image
              src={Forniture}
              alt="Portfolio"
              className="w-[500px] h-auto bg-cyan-500 shadow-xl shadow-[#009945]/70 transition-all duration-300 ease-in-out transform perspective-250 hover:rotate-y-25"
            />
          </Link>
          <div className="max-w-xl dark:text-gray-50 text-gray-800 text-3xl font-poppins font-medium">
            an Ecommerce website for selling furniture built with Django and
            Tailwind CSS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
