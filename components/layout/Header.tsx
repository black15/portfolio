import React from 'react'
import { Poppins } from '@next/font/google'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import SwitchTheme from '../ui/Switch'

type Props = {}
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"] })

const Header = (props: Props) => {
	
	const {systemTheme , theme, setTheme} = useTheme();

	return (
		<header className={`flex flex-row items-center justify-around px-6 py-2 ${poppins.className}`}>
		<div>
			<h1 className={`text-3xl text-gray-100 font-semibold`}>O-Dev</h1>
		</div>
		<div>
			<ul className="flex items-center space-x-4">
				<li><Link href={""}>About Me</Link></li>
				<li><Link href={""}>Skills</Link></li>
				<li><Link href={""}>Projects</Link></li>
			</ul>
		</div>
		<div className='flex items-center space-x-2'>
			<Link href={''}></Link>
		</div>
		<div>
			<SwitchTheme />
		</div>
		</header>
  )
}

export default Header