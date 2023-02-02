/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import SwitchTheme from '../ui/Switch'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter, BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {HiDocumentDownload} from 'react-icons/hi'

type Props = {}

const Header = (props: Props) => {
	
	return (
		<header className={`flex flex-row items-center justify-between px-6 py-4 bg-transparent`}>
			<div className='w-1/3'>
				<h1 className={`text-4xl font-semibold flex items-center`}>RESUME <HiDocumentDownload className='transition hover:text-[#00e064] cursor-pointer' /></h1>
			</div>
			<div className='w-1/3'>
				<ul className="flex items-center space-x-6 font-medium uppercase">
					<li className=' transition hover:text-[#00e064]'><Link href={""}>Home</Link></li>
					<li className=' transition hover:text-[#00e064]'><Link href={""}>About Me</Link></li>
					<li className=' transition hover:text-[#00e064]'><Link href={""}>Skills</Link></li>
					<li className=' transition hover:text-[#00e064]'><Link href={""}>Projects</Link></li>
				</ul>
			</div>
			
			<div className='flex items-center space-x-12'>
				{/* <button className='px-6 py-2 border-2 border-gray-900 dark:border-gray-200 transition hover:bg-[#0ba550] hover:text-white hover:animate-wiggle '>Let's GO</button> */}
				<div className='flex flex-row items-center space-x-6'>
					<FaFacebookF fontSize={22}/>
					<BsTwitter fontSize={22} />
					<BsGithub fontSize={22} />
					<FaInstagram fontSize={25} />
				</div>
				<SwitchTheme />
			</div>
		</header>
  )
}

export default Header