import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

import { Title, Project } from '@components'
import { media } from '@styles'

const Portfolio = ({ className }) => {
	const data = useStaticQuery(graphql`
		query {
			allProjectsYaml {
				edges {
					node {
						title
						slug
						img {
							childImageSharp {
								fluid(maxWidth: 980, quality: 85) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	`)

	const projects = data.allProjectsYaml.edges

	return (
		<Element name="#portfolio" id="portfolio">
			<div className={className}>
				<Title>Portfolio</Title>
				<div className="projects">
					<Fade top duration={2000} delay={1000}>
						{projects.map(({ node }, i) => (
							<Project key={i} node={node} />
						))}
					</Fade>
				</div>
			</div>
		</Element>
	)
}

Portfolio.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(Portfolio)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: calc(100vh - 4rem);
	padding-bottom: 2rem;

	& .projects {
		display: grid;
		grid-template-columns: 1fr;
		gap: calc(var(--spacer) * 3);
		max-width: calc(var(--projectImageMaxWidth) + var(--spacer) * 2);
		width: 100%;
	}

	${media.medium`
		& .projects {
			grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
		}
	`}
`
