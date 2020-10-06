import React, { useState } from 'react'
import styled from 'styled-components'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeButton = ({ className, handleTheme }) => {
	let a = <FaMoon />
	let b = <FaSun />
	const [theme, setTheme] = useState(a)
	// const [theme, setTheme] = useState(<FaSun />)

	const handleClick = () => {
		console.log(theme)
		handleTheme()
		// theme === <FaSun /> ? setTheme(<FaMoon />) : setTheme(<FaSun />)
		theme === a ? setTheme(b) : setTheme(a)
	}

	return (
		<button onClick={handleClick} className={className}>
			<span>{theme}</span>
		</button>
	)
}

export default styled(ThemeButton)`
	z-index: 9999;
	position: fixed;
	top: 60px;
	right: 10px;
	color: ${({ theme }) => theme.frontColor};
	background: ${({ theme }) => theme.activeColor};
	width: 40px;
	height: 40px;
	border-radius: 20px;
	border: 0;
	font-size: 24px;
	cursor: pointer;
	margin: 8px;
	outline: none;
`
