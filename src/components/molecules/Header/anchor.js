import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

const Anchor = ({ children, link }) => {
	return (
		<Link
			activeClass="activeClass"
			to={link}
			spy={true}
			smooth={true}
			duration={500}
		>
			{children}
		</Link>
	)
}

Anchor.propTypes = {
	children: PropTypes.node.isRequired,
	link: PropTypes.string.isRequired,
}

export default Anchor
