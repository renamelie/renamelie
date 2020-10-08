import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

const Portfolio = ({ className }) => {
	return (
		<Element name="#portfolio">
			<div className={className}>Ams</div>
		</Element>
	)
}

export default styled(Portfolio)`
	border: 2px solid purple;
	height: calc(100vh - 4rem);
`
