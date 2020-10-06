import { colors } from '@styles'

export const lightTheme = {
	name: 'light',
	backgroundColor: colors.lightGrey,
	frontColor: colors.black,
	titleColor: colors.accent,
	activeColor: colors.accent,

	// Toggle Button
	svgColor: 'yellow',
	toggleBorder: '#fff',
	gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
	name: 'dark',
	backgroundColor: colors.grey,
	frontColor: colors.white,
	titleColor: colors.accentPlus,
	activeColor: colors.accentPlus,

	// Toggle Button
	svgColor: 'black',
	toggleBorder: '#6B8096',
	gradient: 'linear-gradient(#091236, #1E215D)',
}
