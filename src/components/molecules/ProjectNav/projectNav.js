import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import shortid from 'shortid'

import { ProjectImage } from '@components'

const Project = ({ node }) => (
	<div className="item">
		<Link className="link" to={node.slug}>
			<ProjectImage
				className="image"
				fluid={node.img.childImageSharp.fluid}
				alt={node.title}
			/>
			<h1 className="title">{node.title}</h1>
		</Link>
	</div>
)

Project.propTypes = {
	node: PropTypes.object.isRequired,
}

const ProjectNav = ({ className, currentSlug }) => {
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
		<nav className={className}>
			{projects.map(({ node }) => {
				const isCurrent = node.slug === currentSlug

				return (
					<Fragment key={shortid.generate()}>
						{!isCurrent && <Project node={node} />}
					</Fragment>
				)
			})}
		</nav>
	)
}

ProjectNav.propTypes = {
	className: PropTypes.string.isRequired,
	currentSlug: PropTypes.string.isRequired,
}

export default styled(ProjectNav)`
	max-width: 100%;
	white-space: nowrap;
	overflow-y: hidden;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	padding: 1rem 0;

	&::-webkit-scrollbar,
	&::-moz-scrollbar {
		display: none;
	}

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.accentColor};
	}

	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.textColor};
	}

	.item {
		display: inline-block;
		width: 60vw;
		margin-left: var(--spacer);
	}

	.item:last-child {
		margin-right: calc(var(--spacer) * 2);
	}

	@media (min-width: 30em) {
		.item {
			width: 40vw;
			max-width: 500px;
			margin-left: calc(var(--spacer) * 2);
		}
	}

	.title {
		visibility: hidden;
		font-size: 0;
	}

	.link {
		display: block;
	}
`
