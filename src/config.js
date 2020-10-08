import React from 'react'
import { CgGirl, CgWorkAlt } from 'react-icons/cg'
import { VscTools } from 'react-icons/vsc'
import { HiOutlineMailOpen } from 'react-icons/hi'

export const navLinks = [
	{
		name: 'About',
		id: '#about',
		icon: <CgGirl />,
	},
	{
		name: 'Services',
		id: '#services',
		icon: <VscTools />,
	},
	{
		name: 'Portfolio',
		id: '#portfolio',
		icon: <CgWorkAlt />,
	},
	{
		name: 'Contact',
		id: '#contact',
		icon: <HiOutlineMailOpen />,
	},
]
