import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
	language: 'fr',
}

function reducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_LANGUAGE': {
			return {
				...state,
				language: state.language === 'fr' ? 'en' : 'fr',
			}
		}
		default:
			throw new Error('Bad Action Type')
	}
}

const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<GlobalStateContext.Provider value={state}>
			<GlobalDispatchContext.Provider value={dispatch}>
				{children}
			</GlobalDispatchContext.Provider>
		</GlobalStateContext.Provider>
	)
}

GlobalContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default GlobalContextProvider
