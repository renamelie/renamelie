import { css } from 'styled-components'

export const colors = {
	primary: '#eee8aa', // yellow
	primaryPlus: 'rgb(245, 245, 151)',
	accent: '#b5adde',
	accentPlus: '#6C63FF',
	white: '#f3ebe8',
	black: '#1f1f1f',
	lightGrey: '#e7eef4',
	grey: '#4e5d63',
	lightPink: '#c8aab3',
	darkPink: '#887486',
	darkIcon: 'rgba(87, 87, 87, 0.2)',
	lightIcon: 'rgba(87, 87, 87, 0.4)',

	// --brand-main: #015565;
	// --brand-cyan: #43a699;
	// --brand-main-light: #88bec8;
	// --brand-light: #e7eef4;
	// --brand-grey: #4e5d63;
	// --brand-grey-light: #70858e;
	// --brand-grey-dimmed: #97abb3;
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
