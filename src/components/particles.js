import React from 'react'
import Particles from 'react-particles-js'
import Styled from 'styled-components'

const Particules = ({ className, theme }) => {
	return (
		<Particles
			className={className}
			id="home"
			params={{
				particles: {
					number: {
						value: 200,
						density: {
							enable: true,
							value_area: 1500,
						},
					},
					color: {
						value: '#6C63FF',
					},
					line_linked: {
						color: '#6C63FF',
						enable: true,
						opacity: 0.2,
					},
					move: {
						direction: 'none',
						speed: 0.2,
					},
					size: {
						value: 1,
					},
					opacity: {
						anim: {
							enable: true,
							speed: 4,
							opacity_min: 0.8,
						},
					},
				},
				interactivity: {
					events: {
						onclick: {
							enable: true,
							mode: 'push',
						},
						onhover: {
							enable: true,
							mode: 'repulse',
						},
					},
					modes: {
						push: {
							particles_nb: 4,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	)
}

export default Styled(Particules)`
border: 2px solid red;
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
`
