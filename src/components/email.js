import React from 'react'
import styled from 'styled-components'

import { Side } from '@components'
import { email } from '@config'

const Email = ({ className }) => {
	return (
		<Side orientation="right">
			<div className={className}>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
		</Side>
	)
}

export default styled(Email)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
		background-color: ${({ theme }) => theme.textColor};
	}

	a {
		margin-bottom: 20px;
		padding: 10px;
		letter-spacing: 0.1em;
		writing-mode: vertical-rl;
		color: ${({ theme }) => theme.textColor};
		&:hover,
		&:focus {
			transform: translateY(-3px);
		}
	}

	a:hover,
	a:focus {
		color: ${({ theme }) => theme.accentColor};
	}
`
