/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
	 <section className='relative flex flex-col my-24'>
		<h1 className="hidden lg:block absolute lg:left-[25%] text-6xl lg:text-9xl text-[#0000002c] dark:text-[#ffffff0e] font-bold animate__animated animate__fadeInUp -z-10">ABOUT ME</h1>
		<h2 className="text-3xl text-center font-bold z-10 uppercase animate__animated animate__fadeInUp pt-10">W<span className='border-b-4 border-[#009945]'>ho Am I</span> ?</h2>
		<div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between items-center mt-12 lg:mt-24 text-center lg:text-left">
			<div className='felx flex-col items-center space-y-2'>
				<h1 className="text-3xl font-bold">I'm <span className='text-[#009945]'>Oussama</span>, a Web Developer</h1>
				<p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300">
					I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					<p className='mt-2'>
						Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
					</p>
				</p>
			</div>
			<div className="flex flex-col space-y-2">
				<h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 border-b border-gray-700 pb-3"><span className='font-semibold'>Name</span>: Talha Oussama</h2>
				<h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 border-b border-gray-700 pt-2 pb-3"><span className='font-semibold'>Email</span>: <Link href={'mailto:hunterofbugs61@gmail.com'} className='text-[#009945]'>hunterofbugs61@gmail.com</Link></h2>
				<h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 border-b border-gray-700 pb-3"><span className='font-semibold'>Age</span>: 20</h2>
				<h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 border-b border-gray-700 pb-3"><span className='font-semibold'>From</span>: Algeria</h2>

			</div>
		</div>
	 </section>
  )
}

export default About