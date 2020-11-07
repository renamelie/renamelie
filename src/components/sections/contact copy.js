import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import ReactTooltip from 'react-tooltip'
import { Fade } from 'react-reveal'

import { Title } from '@components'
import { pxToRem } from '@styles'
import { email } from '@config'

const Contact = ({ className }) => {
	const intl = useIntl()

	return (
		<Element name="#contact" id="contact">
			<div className={className}>
				<Title>{intl.formatMessage({ id: 'menuTitle.contact' })}</Title>
				<Fade duration={2000} delay={1000}>
					<div className="content">
						<div className="avatar">
							<div className="imgMe" data-tip="Salut !" data-for="1"></div>
							<ReactTooltip id="1" className="tooltip" />
						</div>

						<p>{intl.formatMessage({ id: 'contact.message' })}</p>

						<a href={`mailto:${email}`}>
							{intl.formatMessage({ id: 'contact.button' })}
						</a>
					</div>
				</Fade>
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
	max-width: 600px;
	margin: 0 auto 100px;
	text-align: center;

	& .content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* min-height: 70vh; */
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

	& a {
		font-size: 16px;
		color: ${({ theme }) => theme.accentColor};
		border: 1px solid ${({ theme }) => theme.accentColor};
		border-radius: 5px;
		padding: 1rem;
		cursor: pointer;
		margin-top: 50px;
		transition: var(--transition);
	}

	& a:hover {
		background-color: ${({ theme }) => theme.accentLightColor};
	}

	& p {
		margin-top: 20px;
	}
`
