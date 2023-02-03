/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Link from 'next/link'
import SwitchTheme from '../ui/Switch'
import {FaFacebookF, FaProjectDiagram} from 'react-icons/fa'
import {BsTwitter, BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {HiDocumentDownload} from 'react-icons/hi'
import {AiOutlineClose, AiFillHome, AiOutlineProject} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {SiAboutdotme} from 'react-icons/si'

type Props = {}

const Header = (props: Props) => {

	const [toggleNav, setToggleNav] = useState<boolean>(false)
	console.log(toggleNav);
	
	return (
		<>
			<header className={`relative hidden lg:flex flex-row items-center justify-between px-6 py-4 bg-transparent`}>
				<div>
					<h1 className={`text-4xl font-semibold flex items-center`}>RESUME <HiDocumentDownload className='transition hover:text-[#00e064] cursor-pointer' /></h1>
				</div>
				<div>
					<ul className="flex items-center space-x-4 font-medium uppercase">
						<li className=' transition hover:text-[#00e064]'><Link href={""}>Home</Link></li>
						<li className=' transition hover:text-[#00e064]'><Link href={""}>About Me</Link></li>
						<li className=' transition hover:text-[#00e064]'><Link href={""}>Skills</Link></li>
						<li className=' transition hover:text-[#00e064]'><Link href={""}>Projects</Link></li>
					</ul>
				</div>
				
				<div className='flex items-center space-x-6'>
					{/* <button className='px-6 py-2 border-2 border-gray-900 dark:border-gray-200 transition hover:bg-[#0ba550] hover:text-white hover:animate-wiggle '>Let's GO</button> */}
					<div className='flex flex-row items-center space-x-4'>
						<FaFacebookF fontSize={22}/>
						<BsTwitter fontSize={22} />
						<BsGithub fontSize={22} />
						<FaInstagram fontSize={25} />
					</div>
					<SwitchTheme />
				</div>
			</header>
			<div className='fixed bg-slate-300 dark:bg-slate-800 left-[9%] md:left-[27%] bottom-5 block lg:hidden transition z-30 rounded-full '>
				{/* <h1 className={`text-4xl font-semibold flex items-center pt-6`}>RESUME <HiDocumentDownload className='transition hover:text-[#00e064] cursor-pointer' /></h1>
				{!toggleNav && 
					<div className='relative bg-red-700'><HiBars3BottomLeft fontSize={26} className='absolute -top-8 right-2' onClick={() => setToggleNav(true)} />
					</div>
				}
				{
					toggleNav && 
					<div className="fixed right-0 top-0 bg-[#000000ec] text-gray-50 w-2/3 h-screen p-6 z-30 transition">
						<div className="flex justify-between items-center transition">
							<SwitchTheme />
							<AiOutlineClose fontSize={24} onClick={() => setToggleNav(false)} />
						</div>
						<ul className="flex flex-col space-y-6 font-medium uppercase mt-12 transition">
							<li className='transition hover:text-[#00e064] py-3 border-b'><Link href={""}>Home</Link></li>
							<li className='transition hover:text-[#00e064] py-3 border-b'><Link href={""}>About Me</Link></li>
							<li className='transition hover:text-[#00e064] py-3 border-b'><Link href={""}>Skills</Link></li>
							<li className='transition hover:text-[#00e064] py-3 border-b'><Link href={""}>Projects</Link></li>
						</ul>
					</div>
				} */}
				<div className="flex flex-row items-center space-x-6 px-6 py-2">
					<Link href={"#home"} className="flex flex-col space-y-2 items-center bg-slate-900 px-4 py-2 rounded-full h-16 w-16">
						<AiFillHome fontSize={22} className='text-[#00e064]' />
						<small className='text-[10px] font-poppins font-semibold'>HOME</small>
					</Link>
					<Link href={"#about"} className="flex flex-col space-y-2 items-center bg-slate-900 px-4 py-2 rounded-full h-16 w-16">
						<SiAboutdotme fontSize={22} className='text-[#00e064]' />
						<small className='text-[10px] font-poppins font-semibold'>ABOUT</small>
					</Link>
					<Link href={"#skills"} className="flex flex-col space-y-2 items-center bg-slate-900 px-4 py-2 rounded-full h-16 w-16">
						<GiSkills fontSize={22} className='text-[#00e064]' />
						<small className='text-[10px] font-poppins font-semibold'>SKILLS</small>
					</Link>
					<Link href={"#project"} className="flex flex-col space-y-2 items-center bg-slate-900 px-4 py-2 rounded-full h-16 w-16">
						<FaProjectDiagram fontSize={22} className='text-[#00e064]' />
						<small className='text-[10px] font-poppins font-semibold'>PROJECT</small>
					</Link>
				</div>
			</div>
		</>
  )
}

export default Header