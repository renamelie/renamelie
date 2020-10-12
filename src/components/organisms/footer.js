import React from 'react'
import styled from 'styled-components'

const footer = ({ className }) => {
	return (
		<footer className={className}>
			<a href="https://github.com/renamelie/renamelie">
				© 2020 — Designed & Built by Ren Amélie
			</a>
		</footer>
	)
}

export default styled(footer)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;

	& a {
		font-size: 14px;
	}
`
