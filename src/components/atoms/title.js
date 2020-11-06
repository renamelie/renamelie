import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

import { media } from '@styles'

const Title = ({ className, children }) => {
	return (
		<Fade bottom duration={2000} delay={200}>
			<h1 className={`${className}`}>{children}</h1>
		</Fade>
	)
}

Title.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
}

export default styled(Title)`
	font-size: clamp(1rem, 5vw, 1.8rem);
	/* font-size: 2rem; */
	font-weight: 300;
	margin: 1rem 0;
	text-transform: uppercase;
	text-align: center;
	word-spacing: 0.6rem;

	&::first-letter {
		font-size: clamp(3rem, 5vw, 4rem);
		/* font-size: 3rem; */
		font-weight: 400;
	}

	${media.bigMedium`
		margin: 1rem 0 2rem;
	`}
`
