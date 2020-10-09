import { colors } from '@styles'
import { MeLight1, MeLight2, MeDark1, MeDark2 } from '@config'

export const lightTheme = {
	backgroundColor: colors.brandLight,
	textColor: colors.brandGrey,
	titleColor: colors.brandMainLight,
	accentColor: colors.brandMainLight,
	accentLightColor: colors.brandMainLighter,

	// Toggle Button
	toggleBorder: '#fff',
	gradient: 'linear-gradient(#39598A, #79D7ED)',

	// Avatar
	normalImg: MeLight1,
	activeImg: MeLight2,
}

export const darkTheme = {
	backgroundColor: colors.brandDark,
	textColor: '#7e9199',
	titleColor: colors.pink,
	accentColor: colors.pink,
	accentLightColor: colors.pinkDarker,

	// Toggle Button
	toggleBorder: '#6B8096',
	gradient: 'linear-gradient(#091236, #1E215D)',

	// Avatar
	normalImg: MeDark1,
	activeImg: MeDark2,
}
