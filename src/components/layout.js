import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header, Footer, Social, Email, Aside } from '@components'
import { media } from '@styles'

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Layout = ({ className, children, location }) => {
	let header

	if (location.pathname === '/') {
		header = <Header />
	} else {
		header = <Aside />
	}

	return (
		<div id="root">
			<StyledContent>
				{header}
				<Social />
				<Email />
				<div>
					<main className={className}>{children}</main>
				</div>
				<Footer />
			</StyledContent>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default styled(Layout)`
	margin: 0 auto;
	width: 100%;
	max-width: 1600px;
	min-height: 100vh;
	padding: 0 25px;

	& > * {
		padding-top: 4rem;
	}

	${media.smaller`
		padding: 0 50px;
	`}

	${media.medium`
		padding: 0 100px;
	`}

	${media.bigMedium`
		padding: 0 150px;
	`}
`
