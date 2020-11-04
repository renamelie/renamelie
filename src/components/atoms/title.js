import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

import { media } from '@styles'

const Title = ({ className, span, text }) => {
	return (
		<Fade bottom duration={2000} delay={200}>
			<h1 className={`${className}`}>
				<span>{span}</span>
				{text}
			</h1>
		</Fade>
	)
}

Title.propTypes = {
	className: PropTypes.string.isRequired,
	span: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default styled(Title)`
	font-size: 2rem;
	font-weight: 300;
	margin: 1rem 0;
	text-transform: uppercase;

	span {
		font-size: 3rem;
		font-weight: 500;
	}

	${media.bigMedium`
		margin: 1rem 0 2rem;
	`}
`
