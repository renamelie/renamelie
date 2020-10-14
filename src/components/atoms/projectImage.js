import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

const StyledProjectImage = styled(Img)`
	margin-left: auto;
	margin-right: auto;
	display: block;
	border-radius: 0.25rem;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.textColor};
	max-width: 1440px;
	background-color: 'transparent';

	& img {
		display: block;
	}
`

const ProjectImage = ({ fluid, alt }) => {
	return <StyledProjectImage fluid={fluid} alt={alt} />
}

ProjectImage.propTypes = {
	fluid: PropTypes.object.isRequired,
	alt: PropTypes.string,
}

export default ProjectImage
