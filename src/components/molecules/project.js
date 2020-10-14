import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { ProjectImage } from '@components'
import { colors } from '@styles'

const StyledProject = styled.article`
	position: relative;

	h1 {
		font-size: 1.45rem;
		opacity: 0;
		position: absolute;
		top: 15%;
		left: 0;
		margin: 0;
		z-index: 2;
		padding: calc(1.5rem / 3) 1.5rem;
		background-color: ${({ theme }) => theme.accentColor};
		color: ${colors.brandLight};
		transform: translate3d(0, -1rem, 0);
		transition: transform 01s ease;
	}

	a:hover h1,
	a:focus h1 {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
	& img {
		transition: transform 01s ease !important;
	}

	&:hover img {
		transform: scale(1.1);
		background-color: black;
		filter: brightness(50%);
	}
`

const Project = ({ node }) => {
	const { slug, title, img } = node

	return (
		<StyledProject>
			<Link to={slug}>
				<h1>{title}</h1>
				<ProjectImage fluid={img.childImageSharp.fluid} alt={title} />
			</Link>
		</StyledProject>
	)
}

Project.propTypes = {
	node: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		img: PropTypes.object.isRequired,
	}),
}

export default Project
