import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

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
		<div id="about" className={className}>
			<h1>{db.name}</h1>
			<p>{db.label}</p>
		</div>
	)
}

export default styled(About)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	& h1 {
		font-size: var(--font-size-h3);
		margin-right: calc(var(--spacer) / 4);
		line-height: var(--line-height);
	}

	& p {
		font-family: var(--font-family-base);
		font-size: var(--font-size-h4);
		color: var(--text-color);
	}

	& p:before {
		content: '{ ';
		opacity: 0.4;
	}

	& p:after {
		content: ' }';
		opacity: 0.4;
	}
`
