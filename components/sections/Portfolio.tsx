/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Blog from '../../public/img/blog.png'
import Nexterce from '../../public/img/nexterce.png'
import {BsBoxArrowUpRight} from 'react-icons/bs'

type Props = {}

const Portfolio = (props: Props) => {
  return (
		<section id='services' className='relative flex flex-col my-32 lg:my-24'>
			<h1 className="text-center absolute right-0 left-0 mx-auto text-5xl sm:text-7xl lg:text-9xl text-[#0000002c] dark:text-[#ffffff0e] font-bold animate__animated animate__fadeInUp -z-10">PORTFOLIO</h1>
			<h2 className="text-2xl md:text-3xl text-center font-bold z-10 uppercase animate__animated animate__fadeInUp pt-6 lg:pt-10">My <span className='border-b-4 border-[#009945]'>Wor</span>ks</h2>
			<div className="flex flex-wrap justify-around items-center space-y-12 mt-24">
				<div className="relative mt-12">
					<a className="absolute inset-0 z-10 bg-gray-500 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 hover:text-gray-200">
						<h1 className='text-2xl font-semibold mb-2'>Blog Application</h1>
						<Link href={"https://next-blog-theta-sooty.vercel.app/"} target={'_blank'} className="flex flex-row items-center space-x-1 mx-auto hover:underline"><span>Live Demo</span><BsBoxArrowUpRight /></Link>
						</a>
					<a href="#" className="relative">
						<div className="flex flex-wrap content-center">
							<Image src={Blog} className="mx-auto h-[400px] w-[400px]" alt="Blog App" width={300} height={200} unoptimized />
						</div>
					</a>
				</div>
				<div className="relative mt-12">
					<a className="absolute inset-0 z-10 bg-gray-500 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300 hover:text-gray-200">
						<h1 className='text-2xl font-semibold mb-2'>NEXTERCE Ecommerce</h1>
						<Link href={"https://nexterce.vercel.app/"} target={'_blank'} className="flex flex-row items-center space-x-1 mx-auto hover:underline"><span>Live Demo</span><BsBoxArrowUpRight /></Link>
						</a>
					<a href="#" className="relative">
						<div className="flex flex-wrap content-center">
							<Image src={Nexterce} className="mx-auto h-[400px] w-[400px]" alt="Nexterce App" width={300} height={200} unoptimized />
						</div>
					</a>
				</div>
				
			</div>
		</section>
  )
}

export default Portfolio