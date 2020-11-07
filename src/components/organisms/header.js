import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CheckLocation, Logo } from '@components'
import { navLinks } from '@config'
import { colors, media } from '@styles'

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
			<Logo />
			<ul>
				{navLinks.map(({ id, name, icon }, i) => (
					<li key={i}>
						<CheckLocation link={id}>
							<span>{icon}</span>
							<div className="sectionName">{name}</div>
						</CheckLocation>
					</li>
				))}
			</ul>
		</header>
	)
}

Header.propTypes = {
	className: PropTypes.string.isRequired,
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
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		height: 100%;
		width: 100%;
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

	& li span {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	${media.small`

		ul {
			justify-content: flex-end;
			padding-right: 5rem;
		}

		li {
			margin: 0 0.5rem;
		}

		& li span {
			display: none;
		}

		& li .sectionName {
			display: block;
		}
	`}
`
