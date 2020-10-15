import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { media } from '@styles'

const Button = ({ className, href, children }) => {
	return (
		<a
			className={className}
			href={href}
			target="_blank"
			rel="nofollow noopener noreferrer"
		>
			{children}
		</a>
	)
}

Button.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node,
}

export default styled(Button)`
	display: block;
	width: 100%;
	color: ${({ theme }) => theme.accentColor};
	text-align: center;
	border-radius: var(--border-radius);
	padding: calc(var(--spacer) / 4) calc(var(--spacer) / 2);
	transition-property: all;
	background: ${({ theme }) => theme.boxBgColor};
	border: 0.05rem solid ${({ theme }) => theme.accentColor};
	font-size: var(--font-size-small);
	cursor: pointer;

	${media.medium`
    display: inline-block;
    width: auto;
  `}

	svg {
		color: ${({ theme }) => theme.accentTextColor};
		margin-right: calc(var(--spacer) / 4);
		transition: 0.2s var(--easing);
		margin-bottom: -0.1rem;
		width: var(--font-size-small);
		height: var(--font-size-small);
	}

	&:hover,
	&:focus {
		filter: brightness(1.2);
		transform: translate3d(0, -0.1rem, 0);
		box-shadow: var(--box-shadow);
	}

	&:active {
		transition: none;
		background: var(--box-background-color);
	}
`
