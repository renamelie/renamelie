import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { SEO, Layout, ProjectImage } from '@components'
import { media } from '@styles'

const StyledProjectImages = styled.div`
	width: 100%;

	& > * {
		transition: var(--transition);
		margin-bottom: calc(var(--spacer) * 3);
	}

	${media.medium`
		& > * {
			margin-bottom: calc(var(--spacer) * 6);
		}
	`}
`

const ProjectImages = ({ projectImages, title }) => {
	return (
		<StyledProjectImages>
			{projectImages.map(({ node }, i) => (
				<ProjectImage key={i} fluid={node.fluid} alt={title} />
			))}
		</StyledProjectImages>
	)
}

const Project = ({ data, location, className }) => {
	const { title, links, techstack, description } = data.projectsYaml
	const projectImages = data.projectImages.edges

	return (
		<Layout location={location} className={className}>
			<SEO />
			<article className={className}>
				<header>
					<h1>{title}</h1>
					<div
						className="desctiption"
						dangerouslySetInnerHTML={{ __html: description }}
					></div>
				</header>
				<ProjectImages projectImages={projectImages} title={title} />
			</article>
		</Layout>
	)
}

Project.propTypes = {}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default styled(Project)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: calc(100vh - 4rem);
	width: 100%;

	header {
		max-width: 800px;
		margin: 4rem 0;
	}

	h1 {
		font-size: var(--font-size-h2);
	}
`

export const projectQuery = graphql`
	query($slug: String!) {
		projectsYaml(slug: { eq: $slug }) {
			title
			slug
			description
			techstack
			links {
				title
				url
				icon
			}
		}

		projectImages: allImageSharp(
			filter: { fluid: { originalName: { regex: $slug } } }
			sort: { fields: [fluid___originalName], order: ASC }
		) {
			edges {
				node {
					id
					fluid(maxWidth: 1440, quality: 85) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
	}
`
