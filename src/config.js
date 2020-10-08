import React from 'react'
import { CgGirl, CgWorkAlt } from 'react-icons/cg'
import { VscTools } from 'react-icons/vsc'
import { HiOutlineMailOpen } from 'react-icons/hi'
import {
	FaGithubAlt,
	FaLinkedinIn,
	FaCodepen,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa'

export const email = 'ren.amelie@gmail.com'

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

export const socialMedia = [
	{
		name: 'Github',
		url: 'https://github.com/renamelie',
		icon: <FaGithubAlt />,
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/renamelie',
		icon: <FaLinkedinIn />,
	},
	{
		name: 'Codepen',
		url: 'https://codepen.io/renamelie',
		icon: <FaCodepen />,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/renamelie',
		icon: <FaInstagram />,
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/ren_amelie',
		icon: <FaTwitter />,
	},
]
