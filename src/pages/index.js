import React from 'react'
import styled from 'styled-components'
import { SEO, Layout, About, Services, Portfolio, Contact } from '@components'

const IndexPage = ({ className }) => (
	<Layout className={className}>
		<SEO title="Home" />
		<About />
		<Services />
		<Portfolio />
		<Contact />
	</Layout>
)

export default styled(IndexPage)`
	border: 2px solid red;
	& > * > * {
		height: calc(100vh - 4rem);
	}
`
