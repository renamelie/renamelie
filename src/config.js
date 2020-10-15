import React from 'react'

import { Icon } from '@components'

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
		icon: <Icon name="Girl" />,
	},
	{
		name: 'Services',
		id: '#services',
		icon: <Icon name="Tools" />,
	},
	{
		name: 'Portfolio',
		id: '#portfolio',
		icon: <Icon name="Case" />,
	},
	{
		name: 'Contact',
		id: '#contact',
		icon: <Icon name="MailOpen" />,
	},
]

export const socialMedia = [
	{
		name: 'Github',
		url: 'https://github.com/renamelie',
		icon: <Icon name="Github" />,
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/renamelie',
		icon: <Icon name="Linkedin" />,
	},
	{
		name: 'Codepen',
		url: 'https://codepen.io/renamelie',
		icon: <Icon name="Codepen" />,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/renamelie',
		icon: <Icon name="Instagram" />,
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/ren_amelie',
		icon: <Icon name="Twitter" />,
	},
]

export const itemServices = [
	{
		icon: <Icon name="FaTools" />,
		title: 'Gestion de projets web',
		text:
			'Site vitrine, corporate, évènementiel, blog, e-commerce, application mobile.',
	},
	{
		icon: <Icon name="FaPencilRuler" />,
		title: 'Conception graphique',
		text:
			'Templates Web, newsletters, emaillings, cartes de visite, plaquette publicitaires..',
	},
	{
		icon: <Icon name="FaCode" />,
		title: 'Intégration web',
		text:
			'Intégration HTML / CSS depuis une maquette en suivant les standards du web.',
	},
	{
		icon: <Icon name="FaLaptopCode" />,
		title: 'Responsive web design',
		text:
			'Compatible tous supports : mobiles, tablettes, PC portables et desktop.',
	},
	{
		icon: <Icon name="GiMagnifyingGlass" />,
		title: 'Référencement naturel',
		text:
			'Affichage sémantique des informations pour un référencement optimal.',
	},
	{
		icon: <Icon name="FaAngellist" />,
		title: 'Animations des pages',
		text: 'Pages web interactives pour embellir votre projet.',
	},
]

// export const srConfig = (delay = 200, viewFactor = 0.25) => ({
// 	origin: 'bottom',
// 	distance: '20px',
// 	duration: 500,
// 	delay,
// 	rotate: { x: 0, y: 0, z: 0 },
// 	opacity: 0,
// 	scale: 1,
// 	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
// 	mobile: true,
// 	reset: false,
// 	useDelay: 'always',
// 	viewFactor,
// 	viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
// })
