import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
	SEO,
	Layout,
	Hero,
	About,
	Services,
	Portfolio,
	Contact,
} from '@components'

const IndexPage = ({ className }) => {
	return (
		<Layout className={className}>
			<SEO />
			<Hero />
			<About />
			<Services />
			<Portfolio />
			<Contact />
		</Layout>
	)
}

IndexPage.propTypes = {
	className: PropTypes.string,
}

export default styled(IndexPage)`
	/* & > * {
		border: 2px solid purple;
	} */
`
