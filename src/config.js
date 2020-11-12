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
		icon: <Icon name="CgWebsite" />,
		title: 'services.services1.name',
		text: 'services.services1.detail',
	},
	{
		icon: <Icon name="FaTools" />,
		title: 'services.services2.name',
		text: 'services.services2.detail',
	},
	{
		icon: <Icon name="FaCode" />,
		title: 'services.services3.name',
		text: 'services.services3.detail',
	},
	{
		icon: <Icon name="FaConnectdevelop" />,
		title: 'services.services4.name',
		text: 'services.services4.detail',
	},
]
