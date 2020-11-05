import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import { Fade } from 'react-reveal'

import { Title, AboutText, AboutPic } from '@components'
import { media } from '@styles'

const About = ({ className }) => {
	return (
		<Element name="#about" id="about">
			<div className={className}>
				<Title>About me</Title>
				<div className="inner">
					<Fade duration={2000} delay={1000}>
						<AboutText />
					</Fade>
					<Fade duration={2000} delay={1500}>
						<AboutPic />
					</Fade>
				</div>
			</div>
		</Element>
	)
}

About.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(About)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 4rem);
	transition: 600ms;
	padding-bottom: 2rem;

	.inner {
		max-width: 1000px;
		display: block;

		${media.medium`
			display: grid;
			grid-template-columns: 3fr 2fr;
		`}
	}
`
