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
	font-size: clamp(1.5rem, 5vw, 3rem);
	/* font-size: 2rem; */
	font-weight: 300;
	margin: 1rem 0;
	text-transform: uppercase;

	&::first-letter {
		font-size: clamp(3.5rem, 5vw, 5rem);
		/* font-size: 3rem; */
		font-weight: 500;
	}

	${media.bigMedium`
		margin: 1rem 0 2rem;
	`}
`
