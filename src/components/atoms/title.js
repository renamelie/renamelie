import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
// import { fadeBottom } from '@styles'

// const FadeStyle = styled.div`
// 	animation-name: ${fadeBottom};
// 	animation-delay: 1s;
// 	animation-timing-function: linear;
// 	animation-duration: 2s;
// `

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

export default styled(Title)`
	font-size: 2rem;
	font-weight: 300;
	margin: 1rem 0 2rem 0;
	text-transform: uppercase;

	span {
		font-size: 3rem;
		font-weight: 500;
	}
`
