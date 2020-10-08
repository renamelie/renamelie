import { css } from 'styled-components'

export const colors = {
	brandMain: '#015565',
	brandCyan: '#43a699',
	brandMainLight: '#88bec8',
	brandLight: '#e7eef4',
	brandDark: '#1d2224',
	brandGrey: '#4e5d63',
	brandGreyLight: '#70858e',
	brandGreyDimmed: '#97abb3',
	dark: '#121516',
	pink: 'pink',
}

export const pxToRem = (px = 16) => {
	return `${px / 16}rem`
}

const sizes = {
	large: 1200,
	medium: 800,
	small: 600,
	smaller: 321,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}rem) {
			${css(...args)}
		}
	`
	return acc
}, {})
