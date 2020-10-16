import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

import { itemServices } from '@config'
import { media } from '@styles'
import { Title, ItemServices as Item } from '@components'

const Services = ({ className }) => {
	return (
		<Element name="#services">
			<div className={className}>
				<Title span="S" text="ervices" />
				<div className="listServices">
					{itemServices.map(({ icon, title, text }, i) => (
						<Fade top key={i} duration={2000} delay={1000}>
							<Item icon={icon} title={title} text={text} />
						</Fade>
					))}
				</div>
			</div>
		</Element>
	)
}

export default styled(Services)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	min-height: calc(100vh - 4rem);
	transition: 600ms;
	padding-bottom: 2rem;

	.listServices {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		max-width: 1440px;
	}

	.listServices > * {
		transition: 0.5s;
	}

	${media.bigMedium`
		.listServices {
			grid-template-columns: 1fr 1fr;
		}

		.listServices > div:nth-child(odd) .styledSpan {
			order: 2;
		}

		.listServices > div:nth-child(odd) .styledText > * {
			text-align: right;
		}
	`}
`
