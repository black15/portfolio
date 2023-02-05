/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Link from 'next/link'
import SwitchTheme from '../ui/Switch'
import {FaFacebookF, FaProjectDiagram} from 'react-icons/fa'
import {BsTwitter, BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {HiDocumentDownload} from 'react-icons/hi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import {SiAboutdotme} from 'react-icons/si'

type Props = {}

const Header = (props: Props) => {

	const [toggleNav, setToggleNav] = useState<boolean>(false)
	console.log(toggleNav);
	
	return (
		<div>
			<header className={`relative hidden lg:flex flex-row items-center justify-between px-6 py-4 bg-transparent`}>
				<div>
					<h1 className={`text-4xl font-semibold flex items-center`}>RESUME <HiDocumentDownload className='transition hover:text-[#00e064] cursor-pointer' /></h1>
				</div>
				<div>
					<ul className="flex items-center space-x-4 font-medium uppercase">
						<li className=' transition hover:text-[#00e064]'><Link href={"#home"}>Home</Link></li>
						<li className=' transition hover:text-[#00e064]'><Link href={"#about"}>About Me</Link></li>
						<li className=' transition hover:text-[#00e064]'><Link href={"#services"}>Services</Link></li>
						<li className=' transition hover:text-[#00e064]'><Link href={"#projects"}>Projects</Link></li>
						<li className=' transition hover:text-[#00e064]'><Link href={"#skills"}>Skills</Link></li>
					</ul>
				</div>
				
				<div className='flex items-center space-x-6'>
					{/* <button className='px-6 py-2 border-2 border-gray-900 dark:border-gray-200 transition hover:bg-[#0ba550] hover:text-white hover:animate-wiggle '>Let's GO</button> */}
					<div className='flex flex-row items-center space-x-4'>
						<Link href={'https://facebook.com/unknownkid.18'} target='_blank'><FaFacebookF fontSize={22}/></Link>
						<Link href={'https://twitter.com/oussama1337'} target='_blank'><BsTwitter fontSize={22} /></Link>
						<Link href={'https://github.com/black15'} target='_blank'><BsGithub fontSize={22} /></Link>
						<Link href={'https://instagram.com/o.u.s.s._.a.m.a'} target='_blank'><FaInstagram fontSize={25} /></Link>
					</div>
					<SwitchTheme />
				</div>
			</header>
			<div className='fixed left-0 right-0 mx-auto w-[95%] sm:w-5/6 md:w-2/3 bottom-5 lg:hidden transition z-30 rounded-full bg-slate-300 dark:bg-slate-800'>
				<div className="flex flex-row justify-evenly items-center px-12 py-2">
					<Link href={"#about"} className="flex flex-col space-y-2 items-center bg-slate-200 dark:bg-slate-900 px-4 py-2 rounded-full h-16 w-16">
						<SiAboutdotme fontSize={22} className='text-[#00e064]' />
						<small className='text-[10px] font-poppins font-semibold'>ABOUT</small>
					</Link>
					
					<Link href={"#services"} className="flex flex-col space-y-2 items-center bg-slate-200 dark:bg-slate-900 px-4 py-2 rounded-full h-16 w-16">
						<MdOutlineMiscellaneousServices fontSize={22} className='text-[#00e064]' />
						<small className='text-[10px] font-poppins font-semibold'>SERVICES</small>
					</Link>
					<Link href={"#projects"} className="flex flex-col space-y-2 items-center bg-slate-200 dark:bg-slate-900 px-4 py-2 rounded-full h-16 w-16">
						<FaProjectDiagram fontSize={22} className='text-[#00e064]' />
						<small className='text-[10px] font-poppins font-semibold'>PROJECT</small>
					</Link>
					<Link href={"#skills"} className="flex flex-col space-y-2 items-center bg-slate-200 dark:bg-slate-900 px-4 py-2 rounded-full h-16 w-16">
						<GiSkills fontSize={22} className='text-[#00e064]' />
						<small className='text-[10px] font-poppins font-semibold'>SKILLS</small>
					</Link>
					<SwitchTheme />
				</div>
			</div>
		</div>
  )
}

export default Header