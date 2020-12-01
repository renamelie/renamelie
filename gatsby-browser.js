import React from 'react'
import { ThemeProvider } from 'styled-components'

import LogRocket from 'logrocket'

import GlobalStyle from './src/styles/GlobalStyle'
import { lightTheme, darkTheme } from '@styles'
import { ThemeButton, useDarkMode } from '@components'

const Provider = ({ element }) => {
	LogRocket.init('wvuvvd/renamelie')

	const [theme, toggleTheme, componentMounted] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!componentMounted) {
		return <div />
	}

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyle />
			<ThemeButton theme={theme} toggleTheme={toggleTheme} />
			{element}
		</ThemeProvider>
	)
}

export const wrapPageElement = ({ element }) => {
	return <Provider element={element} />
}
