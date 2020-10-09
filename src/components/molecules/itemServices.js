import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { media, pxToRem } from '@styles'

const StyledItem = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 2rem 0 2rem 0;

	& > * {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.styledSpan {
		flex: 1;
		margin: 0 1rem 0 1rem;
	}

	.styledText {
		flex: 4;
		display: flex;
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
		font-weight: 300;
		line-height: 1.5rem;
	}

	${media.medium`
		&:nth-child(odd) .styledSpan {
			order: 2;
		}

		&:nth-child(odd) .styledText > * {
			text-align: right;
		}
	`}
`

const ItemServices = ({ icon, title, text }) => {
	return (
		<StyledItem>
			<div className="styledSpan">
				<span className="icon">{icon}</span>
			</div>
			<div className="styledText">
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
		</StyledItem>
	)
}

ItemServices.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
}

export default ItemServices
