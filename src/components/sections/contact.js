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
				<div className="content">
					<div className="imgMe" data-tip="Hi !" data-for="1"></div>
					<ReactTooltip id="1" className="tooltip" />

					{/* <h2>Amélie Ren</h2> */}
					<div className="resume">
						<span>
							<a
								href="mailto: ren.amelie@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Get in touch
							</a>
						</span>
					</div>
				</div>
			</div>
		</Element>
	)
}

export default styled(Contact)`
	text-align: center;
	min-height: calc(100vh - 4rem);

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		min-height: 70vh;
	}

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

	.tooltip {
		color: ${({ theme }) => theme.accentColor};
	}

	/* & .resume {
		justify-content: center;
		align-items: center;
	} */

	& .resume span {
		border: 1px solid ${({ theme }) => theme.accentColor};
		border-radius: 5px;
		padding: 1rem;
		cursor: pointer;
		transition: 600ms;
	}

	& .resume span:hover {
		background-color: ${({ theme }) => theme.accentLightColor};
	}

	& .resume span a {
		font-size: 16px;
		color: ${({ theme }) => theme.accentColor};
	}
`
