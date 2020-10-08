import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { media } from '@styles'
import { Element } from 'react-scroll'

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
				<div className="profile">
					<h1>{db.name}</h1>
					<p>{db.label}</p>
				</div>
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

	& .profile {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
