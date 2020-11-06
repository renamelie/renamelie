import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'

import { GlobalStateContext, GlobalDispatchContext } from '@context'
import { media } from '@styles'

function LanguageSelector({ className }) {
	const state = useContext(GlobalStateContext)
	const dispatch = useContext(GlobalDispatchContext)

	const intl = useIntl()
	const locale = intl.locale !== 'fr' ? intl.locale : ''

	return (
		<div className={className}>
			{state.language === locale ? (
				<Link
					to="/"
					onClick={() => {
						dispatch({ type: 'TOGGLE_LANGUAGE' })
					}}
				>
					<button>FR</button>
				</Link>
			) : (
				<Link
					to="/en"
					onClick={() => {
						dispatch({ type: 'TOGGLE_LANGUAGE' })
					}}
				>
					<button>EN</button>
				</Link>
			)}
		</div>
	)
}

LanguageSelector.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(LanguageSelector)`
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 999;
	height: 4rem;

	button {
		color: ${({ theme }) => theme.textColor};
		margin: 0.5rem 1rem;
		background-color: transparent;
		border: none;
		font-size: 12px;
		width: 20px;
		height: 30px;
		cursor: pointer;
		transition: 800ms;
	}

	${media.small`
		top: 0;
		button {
			width: 40px;
			border: 1px solid ${({ theme }) => theme.accentColor};
			border-radius: 5px;
		}
	`}

	button:hover {
		color: ${({ theme }) => theme.accentColor};
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		font-size: 12px;
		width: 100%;
		height: 100%;
		transition: 800ms;
	}
`
