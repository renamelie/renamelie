import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import { media } from '@styles'
import {
	SEO,
	Layout,
	ProjectImage,
	ProjectLinks,
	ProjectTechs,
	ProjectNav,
} from '@components'

const Project = ({ data, className }) => {
	const intl = useIntl()
	const locale = intl.locale !== 'fr' ? intl.locale : 'fr'
	const {
		title,
		description,
		descriptionEN,
		links,
		techstack,
		slug,
	} = data.projectsYaml
	const projectImages = data.projectImages.edges

	return (
		<Layout className={className}>
			<SEO title={title} />
			<article>
				<header>
					<h1>{title}</h1>
					<div
						className="description"
						dangerouslySetInnerHTML={{
							__html: locale === 'fr' ? description : descriptionEN,
						}}
					></div>
				</header>
				<div className="images">
					{projectImages.map(({ node }, i) => (
						<ProjectImage key={i} fluid={node.fluid} alt={title} />
					))}
				</div>
				<footer className="meta">
					{links && <ProjectLinks links={links} />}
					{techstack && <ProjectTechs techstack={techstack} />}
				</footer>
			</article>

			<ProjectNav currentSlug={slug} />
		</Layout>
	)
}

Project.propTypes = {
	className: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
}

export default styled(Project)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: calc(100vh - 4rem);
	width: 100%;

	article {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	header {
		max-width: 700px;
		margin: 4rem 0;
	}

	h1 {
		font-size: var(--font-size-h2);
	}

	/* Images */

	.images {
		width: 100%;
		max-width: 980px;
	}

	.images > * {
		transition: var(--transition);
		margin-bottom: calc(var(--spacer) * 3);
	}

	${media.medium`
		.images > * {
			margin-bottom: calc(var(--spacer) * 6);
		}
	`}

	/* Footer */
	footer {
		margin-top: -2rem;
		margin-bottom: calc(var(--spacer) * 2);
		display: grid;
		grid-template-columns: 1fr;
		gap: calc(var(--spacer) * 2);
	}

	${media.medium`
		footer {
			grid-template-columns: 2fr 3fr;
			margin-bottom: calc(var(--spacer) * 4);
		}
	`}
`

export const projectQuery = graphql`
	query($slug: String!) {
		projectsYaml(slug: { eq: $slug }) {
			title
			slug
			description
			descriptionEN
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
