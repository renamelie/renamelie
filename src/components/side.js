import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '@styles'

const Side = ({ className, children, orientation }) => {
	return (
		<div className={className} orientation={orientation}>
			{children}
		</div>
	)
}

Side.propTypes = {
	children: PropTypes.node.isRequired,
	orientation: PropTypes.string,
}

export default styled(Side)`
	display: none;
	position: fixed;
	color: var(--light-slate);
	width: 40px;
	bottom: 0;
	left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
	right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
	z-index: 10;

	${media.medium`
    display: block;
  `}

	${media.bigMedium`
    left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  `}
`
