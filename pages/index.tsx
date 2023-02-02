/* eslint-disable react/no-unescaped-entities */
import 'animate.css'
import Image from 'next/image'
import { Lobster, Abril_Fatface } from '@next/font/google'
import { TypeAnimation } from 'react-type-animation';
import banner from '../public/banner.png'

const lobster = Lobster({ weight: "400" })
const fjlla = Abril_Fatface({ weight: "400" })

export default function Home() {
  return (
    <main className='p-6 mt-16'>
      {/* Banner  */}
      <div className="flex items-center justify-between"> 
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-medium">Hello,</h3>
          <h1 className={`text-7xl ${lobster.className}`}>I'm <span className='text-[#00e064]'>Oussama </span>,</h1>
          <TypeAnimation className={`${fjlla.className}`}
            // Same String at the start will only be typed once, initially
            sequence={[
            'a Full Stack Developer',
            1000,
            'a Wordpress Developer',
            1000,
            'a Web Designer',
            1000,
            'a Penetration Tester',
            1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: '2.5em' }}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </div>
        <div>
          <Image 
            className='transform'
            src={banner}
            alt="Banner Image"
            width={500}
            height={222}
          />
        </div>
      </div>
    </main>
  )
}
