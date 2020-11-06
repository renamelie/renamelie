import React from 'react'
import PropTypes from 'prop-types'

import { IconMoon, IconSun, IconExternal } from '@components/atoms/icons'

import { CgGirl, CgWorkAlt, CgWebsite } from 'react-icons/cg'
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
	FaHome,
	FaRegCompass,
} from 'react-icons/fa'
import { GiMagnifyingGlass } from 'react-icons/gi'

const Icon = ({ name }) => {
	switch (name) {
		case 'Moon':
			return <IconMoon />
		case 'Sun':
			return <IconSun />
		case 'Github':
			return <FaGithubAlt />
		case 'Linkedin':
			return <FaLinkedinIn />
		case 'Codepen':
			return <FaCodepen />
		case 'Instagram':
			return <FaInstagram />
		case 'Twitter':
			return <FaTwitter />
		case 'Girl':
			return <CgGirl />
		case 'Tools':
			return <VscTools />
		case 'Case':
			return <CgWorkAlt />
		case 'MailOpen':
			return <HiOutlineMailOpen />
		case 'FaTools':
			return <FaTools />
		case 'FaPencilRuler':
			return <FaPencilRuler />
		case 'FaCode':
			return <FaCode />
		case 'FaLaptopCode':
			return <FaLaptopCode />
		case 'GiMagnifyingGlass':
			return <GiMagnifyingGlass />
		case 'FaAngellist':
			return <FaAngellist />
		case 'FaHome':
			return <FaHome />
		case 'Compass':
			return <FaRegCompass />
		case 'CgWebsite':
			return <CgWebsite />
		default:
			return <IconExternal />
	}
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
}

export default Icon
