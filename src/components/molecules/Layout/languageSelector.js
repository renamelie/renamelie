import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useIntl } from 'gatsby-plugin-intl'

import { GlobalStateContext, GlobalDispatchContext } from '@context'

function LanguageSelector({ className }) {
	const state = useContext(GlobalStateContext)
	const dispatch = useContext(GlobalDispatchContext)

	const intl = useIntl()
	const locale = intl.locale !== 'en' ? intl.locale : ''

	// console.log(`state: ${state.language}, locale: ${locale}`)

	return (
		<div className={className}>
			{state.language === locale ? (
				<Link
					to="/"
					onClick={() => {
						dispatch({ type: 'TOGGLE_LANGUAGE' })
					}}
				>
					EN
				</Link>
			) : (
				<Link
					to="/fr"
					onClick={() => {
						dispatch({ type: 'TOGGLE_LANGUAGE' })
					}}
				>
					FR
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
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 4rem;
	height: 4rem;
	z-index: 999;
	/* position: fixed;
	bottom: 0;
	right: 0;
	margin: 0.5rem;
	z-index: 999; */

	a {
		cursor: pointer;
		font-size: 12px;
	}
`
