/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import 'animate.css'
import { Lobster, Abril_Fatface } from '@next/font/google'
import { TypeAnimation } from 'react-type-animation';
import banner from '../../public/img/banner.svg'

type Props = {}

const lobster = Lobster({ weight: "400" })
const fjlla = Abril_Fatface({ weight: "400" })

const Banner = (props: Props) => {
  return (
      <div className="flex items-center justify-between my-24"> 
        <div className="flex flex-col space-y-3 animate__animated animate__flipInX">
          <h3 className="text-3xl font-medium">Hello,</h3>
          <h1 className={`text-8xl ${lobster.className}`}>I'm <span className='text-[#00e064]'>Oussama </span></h1>
          <TypeAnimation className={`${fjlla.className}`}
            // Same String at the start will only be typed once, initially
            sequence={[
            'a Full Stack Developer',
            3000,
            'a Wordpress Developer',
            3000,
            'a Web Designer',
            3000,
            'a Penetration Tester',
            3000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: '2.7em' }}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
          <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed distinctio ad saepe illum at quidem in nostrum inventore cupiditate. Accusamus reiciendis dolore temporibus cupiditate nostrum.
          </p>
        </div>
        <div>
          <Image 
            className='animate__animated animate__pulse'
            src={banner}
            alt="Banner Image"
            width={500}
            height={222}
          />
        </div>
      </div>
  )
}

export default Banner