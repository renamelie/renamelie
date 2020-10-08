import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

const Contact = ({ className }) => {
	return (
		<Element name="#contact">
			<div className={className}>Ams</div>
		</Element>
	)
}

export default styled(Contact)`
	border: 2px solid purple;
	height: calc(100vh - 4rem);
`
