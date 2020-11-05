import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header, Footer, Social, Email, LanguageSelector } from '@components'
import { media } from '@styles'
import { GlobalContextProvider } from '@context'

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Layout = ({ className, children }) => {
	return (
		<GlobalContextProvider>
			<div id="root">
				<StyledContent>
					<Header />
					<Social />
					<Email />
					<LanguageSelector />
					<div>
						<main className={className}>{children}</main>
					</div>
					<Footer />
				</StyledContent>
			</div>
		</GlobalContextProvider>
	)
}

Layout.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default styled(Layout)`
	margin: 0 auto;
	width: 100%;
	max-width: var(--maxWidth);
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
