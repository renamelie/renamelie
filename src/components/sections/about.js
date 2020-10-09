import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Element } from 'react-scroll'

import { media, fadeTop } from '@styles'

const FadeStyle = styled.div`
	animation-name: ${fadeTop};
	animation-delay: 200ms;
	animation-timing-function: linear;
	animation-duration: 2s;
`

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
				<FadeStyle>
					<div className="profile">
						<h1>{db.name}</h1>
						<p>{db.label}</p>
					</div>
				</FadeStyle>
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
