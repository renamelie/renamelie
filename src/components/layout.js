import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header, Footer } from '@components'

const Layout = ({ className, children }) => {
	return (
		<div id="root">
			<Header />
			<div>
				<main className={className}>{children}</main>
			</div>
			<Footer />
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default styled(Layout)`
	margin: 0 4rem;
	& > * {
		padding-top: 4rem;
	}
`
