import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Element } from 'react-scroll'
import { Fade } from 'react-reveal'
import { FaEnvelope } from 'react-icons/fa'

import { media } from '@styles'

const About = ({ className }) => {
	const data = useStaticQuery(graphql`
		query AboutQuery {
			site {
				siteMetadata {
					title
					name
					label
				}
			}
		}
	`)

	const db = data.site.siteMetadata

	return (
		<Element name="#about">
			<div className={className}>
				<Fade top delay={200} duration={2000}>
					<div className="profile">
						<h1>{db.name}</h1>
						<p>{db.label}</p>
					</div>
				</Fade>
				<Fade bottom delay={200} duration={2000}>
					<span className="contact">
						<a
							href="mailto: ren.amelie@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaEnvelope />
						</a>
					</span>
				</Fade>
				{/* <p>
					I'm a software engineer based in Paris, I build exceptional websites,
					applications in React, Gatsby ..
				</p> */}
			</div>
		</Element>
	)
}

export default styled(About)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 4rem);

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
		margin: 1rem;
		width: 50px;
		height: 50px;
	}

	& .contact svg {
		cursor: pointer;
		height: 40px;
		width: 40px;
	}

	& .contact svg:hover {
		color: ${({ theme }) => theme.accentColor};
	}

	& h1 {
		font-size: var(--font-size-h4);
		margin-right: calc(var(--spacer) / 4);
		line-height: var(--line-height);
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
