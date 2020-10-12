import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import { Title } from '@components'

const Portfolio = ({ className }) => {
	return (
		<Element name="#portfolio">
			<div className={className}>
				<Title span="P" text="ortfolio" />
				<div className="content"> En construction</div>
			</div>
		</Element>
	)
}

export default styled(Portfolio)`
	border: 2px solid purple;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: calc(100vh - 4rem);

	& .content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 70vh;
	}
`
