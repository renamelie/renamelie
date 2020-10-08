import React from 'react'
import styled from 'styled-components'
import { SEO, Layout, About, Services, Portfolio, Contact } from '@components'

const IndexPage = ({ className, location }) => {
	return (
		<Layout className={className} location={location}>
			<SEO title="Home" />
			<About />
			<Services />
			<Portfolio />
			<Contact />
		</Layout>
	)
}

export default styled(IndexPage)`
	& > * > * {
		height: calc(100vh - 4rem);
	}
`
