import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { media } from '@styles'
import { CheckLocation } from '@components'

const Logo = ({ className }) => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fixed(width: 42, height: 42, quality: 100) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	if (!data.placeholderImage.childImageSharp.fixed) {
		return <div>Picture not found</div>
	}

	return (
		<div className={className}>
			<CheckLocation link="#hero">
				<Img
					className="logo"
					fixed={data.placeholderImage.childImageSharp.fixed}
				/>
			</CheckLocation>
		</div>
	)
}

Logo.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(Logo)`
	margin: 0 var(--smallMargin);
	cursor: pointer;

	display: none;

	${media.small`
		display: block;
	`}

	& > * {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.logo:hover {
		transition: all 0.3s linear;
		transform: rotate(180deg);
	}

	${media.bigMedium`
		margin: 0 var(--bigMargin);
	`}
`
