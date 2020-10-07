import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { navLinks } from '@config'
import scrollTo from 'gatsby-plugin-smoothscroll'

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
				backgroundColor: navBackground ? 'white' : 'pink',
				transition: '1s ease',
			}}
		>
			<ul>
				{navLinks.map(({ id, name }, i) => (
					<li key={i}>
						<button onClick={() => scrollTo(id)}>{name}</button>
					</li>
				))}
			</ul>
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
	/* background-color: pink; */
	height: 4rem;
	position: fixed;
	width: 100%;
	z-index: 99;

	ul {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		height: 100%;
	}

	li,
	button {
		cursor: pointer;
		font-size: 12px;
		font-weight: 500;
		text-transform: uppercase;
	}

	button {
		padding: 0;
		border: none;
		background: none;
	}
`
