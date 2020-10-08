import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header, Footer, Social, Email } from '@components'

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Layout = ({ className, location, children }) => {
	const isHome = location.pathname === '/'

	return (
		<div id="root">
			{isHome && (
				<StyledContent>
					<Header isHome={isHome} />
					<Social isHome={isHome} />
					<Email isHome={isHome} />
					<div>
						<main className={className}>{children}</main>
					</div>
					<Footer />
				</StyledContent>
			)}
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
