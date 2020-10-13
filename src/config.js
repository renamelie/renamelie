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
	FaTools,
	FaPencilRuler,
	FaCode,
	FaLaptopCode,
	FaAngellist,
} from 'react-icons/fa'
import { GiMagnifyingGlass } from 'react-icons/gi'

import MeLight1 from './images/meLight1.svg'
import MeLight2 from './images/meLight2.svg'
import MeDark1 from './images/meDark1.svg'
import MeDark2 from './images/meDark2.svg'

export { MeLight1, MeLight2, MeDark1, MeDark2 }

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

export const itemServices = [
	{
		icon: <FaTools />,
		title: 'Gestion de projets web',
		text:
			'Site vitrine, corporate, évènementiel, blog, e-commerce, application mobile.',
	},
	{
		icon: <FaPencilRuler />,
		title: 'Conception graphique',
		text:
			'Templates Web, newsletters, emaillings, cartes de visite, plaquette publicitaires..',
	},
	{
		icon: <FaCode />,
		title: 'Intégration web',
		text:
			'Intégration HTML / CSS depuis une maquette en suivant les standards du web.',
	},
	{
		icon: <FaLaptopCode />,
		title: 'Responsive web design',
		text:
			'Compatible tous supports : mobiles, tablettes, PC portables et desktop.',
	},
	{
		icon: <GiMagnifyingGlass />,
		title: 'Référencement naturel',
		text:
			'Affichage sémantique des informations pour un référencement optimal.',
	},
	{
		icon: <FaAngellist />,
		title: 'Animations des pages',
		text: 'Pages web interactives pour embellir votre projet.',
	},
]

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
	origin: 'bottom',
	distance: '20px',
	duration: 500,
	delay,
	rotate: { x: 0, y: 0, z: 0 },
	opacity: 0,
	scale: 1,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor,
	viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
})
