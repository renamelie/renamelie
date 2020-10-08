import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import { navLinks } from '@config'
import { colors, media } from '@styles'
import Pdf from '@resume'

const Header = ({ className }) => {
	const [navBackground, setNavBackground] = useState(false)
	const navRef = useRef()
	navRef.current = navBackground
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 200
			if (navRef.current !== show) {
				setNavBackground(show)
			}
		}
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={className}
			style={{
				backgroundColor: navBackground ? colors.dark : 'transparent',
				transition: '1s ease',
			}}
		>
			<ul>
				{navLinks.map(({ id, name, icon }, i) => (
					<Link
						key={i}
						activeClass="activeClass"
						to={id}
						spy={true}
						smooth={true}
						duration={500}
					>
						<li>
							<span>{icon}</span>
							<div className="sectionName">{name}</div>
						</li>
					</Link>
				))}
			</ul>
			<div className="resume">
				<span>
					<a href={Pdf} target="_blank" rel="noreferrer">
						Resume
					</a>
				</span>
			</div>
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default styled(Header)`
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	height: 4rem;
	width: 100%;
	z-index: 99;

	& ul {
		/* flex: 4; */
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		height: 100%;
		width: 100%;
	}

	& .resume {
		/* flex: 1; */
		display: none;
		justify-content: center;
		align-items: center;
		width: 120px;
	}

	& .resume span {
		font-size: 12px;
		border: 1px solid ${({ theme }) => theme.accentColor};
		border-radius: 5px;
		padding: 0.5rem 1rem;
	}

	& .resume span a {
		color: ${({ theme }) => theme.accentColor};
	}

	& li,
	& button {
		color: ${({ theme }) => theme.textColor};
		cursor: pointer;
		font-size: 12px;
		font-weight: 500;
		text-transform: uppercase;
	}

	& svg {
		width: 25px;
		height: 25px;
	}

	& button {
		padding: 0;
		border: none;
		background: none;
	}

	& li:hover,
	.activeClass .sectionName,
	.activeClass span {
		color: ${({ theme }) => theme.accentColor};
	}

	& li .sectionName {
		display: none;
	}

	${media.small`
		& ul {
			width: auto;
		}

		& li span {
			display: none;
		}

		& li .sectionName {
			display: block;
		}

		& .resume {
			display: flex;
		}
	`}
`
