import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import styled from 'styled-components'
import { media } from '@styles'

const Side = ({ className, children, orientation }) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 2000)
		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className={className} orientation={orientation}>
			<TransitionGroup component={null}>
				{isMounted && (
					<CSSTransition
						classNames={orientation === 'left' ? 'fadeleft' : 'faderight'}
						timeout={2000}
					>
						{children}
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	)
}

Side.propTypes = {
	className: PropTypes.string.isRequired,
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
	z-index: 11;

	${media.medium`
    display: block;
  `}

	${media.bigMedium`
    left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  `}
`
