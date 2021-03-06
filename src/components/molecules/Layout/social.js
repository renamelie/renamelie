import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Side } from '@components'
import { socialMedia } from '@config'

const Social = ({ className }) => {
	return (
		<Side orientation="left">
			<ul className={className}>
				{socialMedia &&
					socialMedia.map(({ url, name, icon }, i) => (
						<li key={i}>
							<a href={url} aria-label={name} target="_blank" rel="noreferrer">
								{icon}
							</a>
						</li>
					))}
			</ul>
		</Side>
	)
}

Social.propTypes = {
	className: PropTypes.string.isRequired,
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
