import React from 'react'
import styled from 'styled-components'
import { SEO, Layout, About, Services, Portfolio, Contact } from '@components'

const IndexPage = ({ className, location }) => {
	return (
		<Layout className={className} location={location}>
			<SEO />
			<About />
			<Services />
			<Portfolio />
			<Contact />
		</Layout>
	)
}

export default styled(IndexPage)`
	/* & > * {
		border: 2px solid purple;
	} */
`
