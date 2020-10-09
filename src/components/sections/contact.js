import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import ReactTooltip from 'react-tooltip'

import { Title } from '@components'
import { pxToRem } from '@styles'

const Contact = ({ className }) => {
	return (
		<Element name="#contact">
			<div className={className}>
				<Title span="C" text="ontact" />
				<div className="avatar">
					<div className="imgMe"></div>
				</div>
			</div>
		</Element>
	)
}

export default styled(Contact)`
	border: 2px solid purple;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 4rem);

	.imgMe {
		width: 200px;
		height: 200px;
		margin: ${pxToRem(10)};
		background: url(${({ theme }) => theme.normalImg}) no-repeat;
		background-size: contain;
		border: 2px solid ${({ theme }) => theme.accentColor};
		border-radius: 100px;
	}

	.imgMe:hover {
		background: url(${({ theme }) => theme.activeImg}) no-repeat;
		background-size: contain;
	}
`
