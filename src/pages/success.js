import React from 'react'
import PropTypes from 'prop-types'
import { SEO, Layout } from '@components'
import styled from 'styled-components'

const Success = ({ className }) => {
	return (
		<Layout>
			<SEO title="Success" />
			<div className={className}>Success !</div>
		</Layout>
	)
}

Success.propTypes = {
	className: PropTypes.string,
}

export default styled(Success)`
	min-height: calc(100vh - 4rem);
	display: flex;
	justify-content: center;
	align-items: center;
`
