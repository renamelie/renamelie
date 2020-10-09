import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

import { itemServices } from '@config'
import { media } from '@styles'
import { Title, ItemServices as Item } from '@components'

const Services = ({ className }) => {
	return (
		<Element name="#services">
			<div className={className}>
				<Title span="S" text="ervices" />
				<ul className="listServices">
					{itemServices.map(({ icon, title, text }, i) => (
						<Item key={i} icon={icon} title={title} text={text} />
					))}
				</ul>
			</div>
		</Element>
	)
}

export default styled(Services)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 4rem);
	transition: 600ms;

	.listServices {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		max-width: 1440px;
		min-height: 70vh;
	}

	${media.medium`
		.listServices {
			grid-template-columns: 1fr 1fr;
		}
	`}
`
