import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { media } from '@styles'

const AboutPic = ({ className }) => {
	const data = useStaticQuery(graphql`
		query {
			avatar: file(
				sourceInstanceName: { eq: "images" }
				relativePath: { eq: "me.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
						...GatsbyImageSharpFluid_withWebp_tracedSVG
					}
				}
			}
		}
	`)

	return (
		<div className={className}>
			<div className="wrapper">
				<Img
					fluid={data.avatar.childImageSharp.fluid}
					alt="Avatar"
					className="img"
				/>
			</div>
		</div>
	)
}

AboutPic.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(AboutPic)`
	display: flex;
	justify-content: center;
	align-items: center;

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 70%;
		height: 500px;

		${media.medium`
			min-width: 250px;
			max-width: 300px;
			justify-content: center;
		`}

		& > * {
			height: 320px;
		}

		.img {
			border-radius: var(--border-radius);
			filter: grayscale(100%);
		}
	}
`
