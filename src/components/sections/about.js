import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import { FaEnvelope } from 'react-icons/fa'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { media } from '@styles'
import { email } from '@config'

const About = ({ className }) => {
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
			{intl.formatMessage({ id: 'whoami' })}
		</h3>,
		<span key={3} className="contact">
			<a href={`mailto:${email}`}>
				<FaEnvelope />
			</a>
		</span>,
	]

	return (
		<Element name="#about" id="about">
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

About.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(About)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	min-height: calc(100vh - 4rem);
	transition: var(--transition);

	& > * {
		width: 100%;
	}

	h1,
	h2,
	h3 {
		font-weight: 600;
	}

	& h1 {
		font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
		font-weight: 400;
	}

	& h3 {
		margin-top: 10px;
		color: ${({ theme }) => theme.textColor};
		line-height: 0.9;
		font-weight: 400;
	}

	& .profile {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	& .contact {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 50px;
	}

	& .contact svg {
		cursor: pointer;
		height: 50px;
		width: 50px;
	}

	& .contact svg:hover {
		color: ${({ theme }) => theme.accentColor};
	}

	& p {
		font-family: var(--font-family-base);
		font-size: var(--font-size-base);
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

	${media.small`
		& .profile {
			flex-direction: row;
		}

		& h1 {
			font-size: var(--font-size-h3);
		}

		& p {
			font-size: var(--font-size-h4);
		}
	`}
`
