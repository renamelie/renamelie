import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import { FaEnvelope } from 'react-icons/fa'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { email } from '@config'

const Hero = ({ className }) => {
	const [isMounted, setIsMounted] = useState(false)
	const intl = useIntl()

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 1000)
		return () => clearTimeout(timeout)
	}, [])

	const items = [
		<h1 key={0}>{intl.formatMessage({ id: 'hello' })}</h1>,
		<h2 key={1} className="big-heading">
			Ren Amélie.
		</h2>,
		<h3 key={2} className="medium-heading">
			{intl.formatMessage({ id: 'whatido' })}
		</h3>,
		<p key={3}>{intl.formatMessage({ id: 'miniDescription' })}</p>,
		<span key={4} className="contact">
			<a href={`mailto:${email}`}>
				<FaEnvelope />
			</a>
		</span>,
	]

	return (
		<Element name="#hero" id="hero">
			<div className={className}>
				<TransitionGroup component={null}>
					{isMounted &&
						items.map((item, i) => (
							<CSSTransition key={i} classNames="fadeup" timeout={2000}>
								<div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
							</CSSTransition>
						))}
				</TransitionGroup>
			</div>
		</Element>
	)
}

Hero.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(Hero)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 4rem);
	transition: var(--transition);

	& > * {
		width: 100%;
	}

	h1 {
		font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
		font-weight: 400;
		color: ${({ theme }) => theme.textColor};
		margin: 0 0 20px 4px;
	}

	h2,
	h3 {
		font-size: var(--big-heading);
		font-weight: 700;
	}

	h3 {
		/* font-weight: 600; */
		margin-top: 10px;
		color: ${({ theme }) => theme.textColor};
		line-height: 0.9;
	}

	p {
		margin: 20px 0 0;
		max-width: 500px;
	}

	.contact {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 50px;
	}

	.contact svg {
		cursor: pointer;
		height: 50px;
		width: 50px;
		transition: 800ms;
	}

	.contact svg:hover {
		color: ${({ theme }) => theme.accentColor};
		transform: scale(1.15);
	}
`
