import React from 'react'
import PropTypes from 'prop-types'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { useIntl } from 'gatsby-plugin-intl'

import { itemServices } from '@config'
import { media } from '@styles'
import { Title, ItemServices as Item } from '@components'

const Services = ({ className }) => {
	const intl = useIntl()

	return (
		<Element name="#services" id="services">
			<div className={className}>
				<Title>{intl.formatMessage({ id: 'menuTitle.services' })}</Title>
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

Services.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(Services)`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
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
		display: flex;
	}

	${media.bigMedium`
		justify-content: center;

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
