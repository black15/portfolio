/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {HiComputerDesktop} from 'react-icons/hi2'
import {MdOutlineDraw} from 'react-icons/md'
import {FaWordpressSimple} from 'react-icons/fa'
import {SiTryhackme} from 'react-icons/si'

type Props = {}

const Services = (props: Props) => {
  return (
		<section className='relative flex flex-col my-24'>
			<h1 className="absolute left-[28%] text-9xl text-[#0000002c] dark:text-[#ffffff0e] font-bold animate__animated animate__fadeInUp -z-10">SERVICES</h1>
			<h2 className="text-3xl text-center font-bold z-10 uppercase animate__animated animate__fadeInUp pt-10">W<span className='border-b-4 border-[#009945]'>hat I Offer</span> ?</h2>
			<div className="flex flex-col md:flex-row flex-wrap justify-between items-center mt-24 space-y-8 md:space-y-0">
				<div className="flex flex-row items-center space-x-8">
					<div className='dark:bg-gray-800 p-3 md:mb-16 mb-20 rounded'>
						<HiComputerDesktop fontSize={45} color={"#00bb54"} />
					</div>
					<div className="flex flex-col space-y-4">
						<h1 className="text-2xl font-medium">Web Developement</h1>
						<p className="lg:max-w-lg text-lg text-gray-700 dark:text-gray-300">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed distinctio ad saepe illum at quidem in nostrum inventore cupiditate.
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center space-x-8">
					<div className='dark:bg-gray-800 p-3 md:mb-16 mb-20 rounded'>
						<MdOutlineDraw fontSize={45} color={"#00bb54"} />
					</div>
					<div className="flex flex-col space-y-4">
						<h1 className="text-2xl font-medium">UI/UX Design</h1>
						<p className="max-w-lg text-lg text-gray-700 dark:text-gray-300">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed distinctio ad saepe illum at quidem in nostrum inventore cupiditate.
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center space-x-8">
					<div className='dark:bg-gray-800 p-3 md:mb-16 mb-20 rounded'>
						<FaWordpressSimple fontSize={45} color={"#00bb54"} />
					</div>
					<div className="flex flex-col space-y-4">
						<h1 className="text-2xl font-medium">Wordpress</h1>
						<p className="max-w-lg text-lg text-gray-700 dark:text-gray-300">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed distinctio ad saepe illum at quidem in nostrum inventore cupiditate.
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center space-x-8 mt-8">
					<div className='dark:bg-gray-800 p-3 md:mb-16 mb-20 rounded'>
						<SiTryhackme fontSize={45} color={"#00bb54"} />
					</div>
					<div className="flex flex-col space-y-4">
						<h1 className="text-2xl font-medium">Penetration Testing</h1>
						<p className="max-w-lg text-lg text-gray-700 dark:text-gray-300">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed distinctio ad saepe illum at quidem in nostrum inventore cupiditate.
						</p>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Services