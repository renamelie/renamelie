import { keyframes } from 'styled-components'

export const fadeTop = keyframes`
  0% {
  	transform: translateY(-40px);
		opacity: 0;
  }
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`

export const fadeBottom = keyframes`
  0% {
  	transform: translateY(40px);
		opacity: 0;
  }
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`

export const fadeLeft = keyframes`
  0% {
  	transform: translateX(-40px);
		opacity: 0;
  }
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`

export const fadeRight = keyframes`
  0% {
  	transform: translateX(40px);
		opacity: 0;
  }
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`
