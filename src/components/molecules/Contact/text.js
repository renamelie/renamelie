import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import { email } from '@config'
import { media, pxToRem } from '@styles'

const Text = ({ className }) => {
	const intl = useIntl()

	return (
		<div className={className}>
			<div className="avatar">
				<div className="imgMe" data-tip="Hello !" data-for="1"></div>
				<ReactTooltip id="1" className="tooltip" />
			</div>

			<p>{intl.formatMessage({ id: 'contact.message' })}</p>

			<a href={`mailto:${email}`}>
				{intl.formatMessage({ id: 'contact.button' })}
			</a>
		</div>
	)
}

Text.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(Text)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;

	${media.large`
    margin: 0 2rem 0 0
  `}

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

	a {
		font-size: 16px;
		color: ${({ theme }) => theme.accentColor};
		border: 1px solid ${({ theme }) => theme.accentColor};
		border-radius: 5px;
		padding: 1rem;
		cursor: pointer;
		margin-top: 20px;
		transition: var(--transition);
	}

	a:hover {
		background-color: ${({ theme }) => theme.accentLightColor};
	}

	p {
		margin-top: 20px;
	}
`
