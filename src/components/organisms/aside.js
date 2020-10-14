import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaHome } from 'react-icons/fa'
import { colors, media } from '@styles'

const Aside = ({ className }) => {
	const [navBackground, setNavBackground] = useState(false)
	const navRef = useRef()
	navRef.current = navBackground
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 50
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
			<Link to="/" style={{ verticalAlign: 'middle' }}>
				<FaHome />
			</Link>
			<div className="profile">
				<h1>Ren Amélie</h1>
				<p>developer & freelance</p>
			</div>
		</header>
	)
}

export default styled(Aside)`
	position: fixed;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 4rem;
	width: 100%;
	z-index: 99;

	& .profile {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	& h1,
	& p {
		transition: 600ms;
		font-size: 12px;
	}

	& h1 {
		margin: 0 calc(var(--spacer) / 4) 0 0;
		line-height: var(--line-height);
	}

	& p {
		font-family: var(--font-family-base);
		color: var(--text-color);
	}

	& .profile p:before {
		content: '{ ';
		opacity: 0.4;
	}

	& .profile p:after {
		content: ' }';
		opacity: 0.4;
	}

	& svg {
		width: 25px;
		height: 25px;
	}

	& a {
		display: flex;
		margin: 1rem;
		padding: 10px;
	}

	& a:hover svg {
		color: ${({ theme }) => theme.accentColor};
	}

	${media.small`

		& h1 {
			font-size: var(--font-size-h3);
		}

		& p {
			font-size: var(--font-size-h4);
		}
	`}
`
