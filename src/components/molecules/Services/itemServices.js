import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { media, pxToRem } from '@styles'
import { FormattedMessage } from 'gatsby-plugin-intl'

const StyledItem = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	margin: 1rem 0;
	min-height: 90px;

	& > * {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.styledSpan {
		flex: 1;
		margin: 0 1rem;
	}

	.styledText {
		flex: 4;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		margin-right: 0.5rem;
	}

	.styledText > * {
		width: 100%;
		text-align: left;
	}

	.icon {
		font-size: ${pxToRem(24)};
		color: ${({ theme }) => theme.accentColor};
		border: 2px solid ${({ theme }) => theme.accentColor};
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		width: 60px;
		border-radius: 50%;
		transition: 600ms;
	}

	.icon:hover {
		color: ${({ theme }) => theme.textColor};
		background-color: ${({ theme }) => theme.accentColor};
	}

	h4 {
		font-size: ${pxToRem(14)};
		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: 500;
		margin-bottom: ${pxToRem(10)};
	}

	p {
		font-size: ${pxToRem(14)};
		font-weight: 400;
		line-height: 1.5rem;
	}

	${media.bigMedium`
		margin: 2rem 0;
	`}
`

const ItemServices = ({ icon, title, text }) => {
	return (
		<StyledItem>
			<div className="styledSpan">
				<span className="icon">{icon}</span>
			</div>
			<div className="styledText">
				<h4>
					<FormattedMessage id={title} />
				</h4>
				<p>
					<FormattedMessage id={text} />
				</p>
			</div>
		</StyledItem>
	)
}

ItemServices.propTypes = {
	icon: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default ItemServices
