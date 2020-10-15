import { colors } from '@styles'
import { MeLight1, MeLight2, MeDark1, MeDark2 } from '@config'

export const lightTheme = {
	backgroundColor: colors.brandLight,
	reverseColor: colors.brandDark,
	textColor: colors.brandGrey,
	accentTextColor: colors.brandGreyLight,
	titleColor: colors.brandMainLight,
	accentColor: colors.brandMainLight,
	accentLightColor: colors.brandMainLighter,
	boxShadow: '0 3px 5px rgba(0, 0, 0, 0.05), 0 5px 16px rgba(0, 0, 0, 0.05)',
	boxBgColor: 'rgba(255, 255, 255, 0.2)',

	// Toggle Button
	toggleBorder: '#fff',
	gradient: 'linear-gradient(#39598A, #79D7ED)',

	// Avatar
	normalImg: MeLight1,
	activeImg: MeLight2,
}

export const darkTheme = {
	backgroundColor: colors.brandDark,
	reverseColor: colors.brandLight,
	textColor: '#7e9199',
	accentTextColor: colors.brandGrey,
	titleColor: colors.pink,
	accentColor: colors.pink,
	accentLightColor: colors.pinkDarker,
	boxShadow: '0 3px 5px rgba(0, 0, 0, 0.25), 0 5px 16px rgba(0, 0, 0, 0.25)',
	boxBgColor: 'rgba(255, 255, 255, 0.03)',

	// Toggle Button
	toggleBorder: '#6B8096',
	gradient: 'linear-gradient(#091236, #1E215D)',

	// Avatar
	normalImg: MeDark1,
	activeImg: MeDark2,
}
