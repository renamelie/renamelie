import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import { Fade } from 'react-reveal'

import { Title, Text, Form } from '@components'
import { media } from '@styles'

const Contact = ({ className }) => {
	const intl = useIntl()

	return (
		<Element name="#contact" id="contact">
			<div className={className}>
				<Title>{intl.formatMessage({ id: 'menuTitle.contact' })}</Title>
				<div className="content">
					<Fade duration={2000} delay={1000}>
						<Text />
					</Fade>
					{/* <Fade duration={2000} delay={1500}>
						<div className="form">
							<Form />
						</div>
					</Fade> */}
				</div>
			</div>
		</Element>
	)
}

Contact.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(Contact)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 4rem);
	margin: 0 auto 100px;
	text-align: center;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	${media.large`
		.content {
			flex-direction: row;
		}
	`}

	.content > * {
		flex: 1;
	}

	.form {
		width: 100%;
	}
`
