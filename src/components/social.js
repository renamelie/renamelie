import React from 'react'
import styled from 'styled-components'

import { Side } from '@components'
import { socialMedia } from '@config'

const Social = ({ className, isHome }) => {
	return (
		<Side isHome={isHome} orientation="left">
			<ul className={className}>
				{socialMedia &&
					socialMedia.map(({ url, name, icon }, i) => (
						<li key={i}>
							<a href={url} aria-label={name}>
								{icon}
							</a>
						</li>
					))}
			</ul>
		</Side>
	)
}

export default styled(Social)`
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style: none;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
		background-color: ${({ theme }) => theme.textColor};
	}

	li {
		padding: 10px;
		&:last-of-type {
			margin-bottom: 20px;
		}

		a {
			svg {
				color: ${({ theme }) => theme.textColor};
				width: 20px;
				height: 20px;
				transition: 0.2s ease-out;
			}

			svg:hover,
			svg:focus {
				transform: translateY(-3px);
				color: ${({ theme }) => theme.accentColor};
			}
		}
	}
`
