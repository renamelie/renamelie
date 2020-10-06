import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './src/styles/GlobalStyle'
import { ThemeButton, lightTheme, darkTheme, useDarkMode } from '@styles'

const Provider = ({ element }) => {
	const [theme, toggleTheme, componentMounted] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!componentMounted) {
		return <div />
	}

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyle />
			<ThemeButton theme={theme} toggleTheme={toggleTheme} />
			<h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
			{element}
		</ThemeProvider>
	)
}

export const wrapPageElement = ({ element }) => {
	return <Provider element={element} />
}

// import React, { useState } from 'react'
// import { ThemeProvider } from 'styled-components'

// import GlobalStyle from './src/styles/GlobalStyle'
// import { ThemeButton, lightTheme, darkTheme, useDarkMode } from '@styles'

// const Provider = ({ element }) => {
// 	const [theme, setTheme] = useState(darkTheme)

// 	const handleTheme = () => {
// 		theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
// 	}

// 	return (
// 		<ThemeProvider theme={theme}>
// 			<GlobalStyle />
// 			<ThemeButton handleTheme={handleTheme} />
// 			{element}
// 		</ThemeProvider>
// 	)
// }

// export const wrapPageElement = ({ element }) => {
// 	return <Provider element={element} />
// }
