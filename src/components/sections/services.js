import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

const Services = ({ className }) => {
	return (
		<Element name="#services">
			<div className={className}>Ams</div>
		</Element>
	)
}

export default styled(Services)`
	border: 2px solid purple;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
