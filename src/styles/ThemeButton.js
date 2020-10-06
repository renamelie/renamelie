import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { Icon } from '@components/icons'

const ToggleContainer = styled.button`
	color: ${({ theme }) => theme.svgColor};
	background: ${({ theme }) => theme.gradient};
	border: 2px solid ${({ theme }) => theme.toggleBorder};
	border-radius: 30px;
	cursor: pointer;
	display: flex;
	font-size: 0.5rem;
	justify-content: space-between;
	margin: 0 auto;
	overflow: hidden;
	padding: 0.5rem;
	position: relative;
	width: 8rem;
	height: 4rem;

	svg {
		height: auto;
		width: 2.5rem;
		transition: all 0.3s linear;

		&:first-child {
			transform: ${({ lightTheme }) =>
				lightTheme ? 'translateY(0)' : 'translateY(100px)'};
		}

		&:nth-child(2) {
			transform: ${({ lightTheme }) =>
				lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
		}
	}
`

const ThemeButton = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light'

	return (
		<ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
			<Icon name="Sun" />
			<Icon name="Moon" />
		</ToggleContainer>
	)
}

ThemeButton.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
}

export default ThemeButton
