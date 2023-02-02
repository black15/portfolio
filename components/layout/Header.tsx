/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Poppins } from '@next/font/google'
import Link from 'next/link'
import SwitchTheme from '../ui/Switch'

type Props = {}
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"] })

const Header = (props: Props) => {
	
	return (
		<header className={`flex flex-row items-center justify-evenly px-6 py-2 bg-transparent w-screen${poppins.className}`}>
			<div className='w-1/3'>
				<h1 className={`text-3xl font-semibold`}>O-Dev</h1>
			</div>
			<div className='w-1/3'>
				<ul className="flex items-center space-x-4 font-medium uppercase">
					<li className=' transition hover:text-purple-600'><Link href={""}>About Me</Link></li>
					<li className=' transition hover:text-purple-600'><Link href={""}>Skills</Link></li>
					<li className=' transition hover:text-purple-600'><Link href={""}>Projects</Link></li>
				</ul>
			</div>
			
			<div className='flex items-center space-x-2'>
				<button className='px-6 py-2 border-2 border-gray-900 dark:border-gray-200 transition hover:bg-purple-700 hover:animate-wiggle '>Let's GO</button>
				<SwitchTheme />
			</div>
		</header>
  )
}

export default Header