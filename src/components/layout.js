import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header, Footer, Social, Email } from '@components'

const Layout = ({ className, children }) => {
	return (
		<div id="root">
			<Header />
			<Social />
			<Email />
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
	padding: 0 6vw;
	& > * {
		padding-top: 4rem;
	}
`
