import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { Anchor } from '@components'

const CheckLocation = ({ children, link }) => {
	const intl = useIntl()
	const locale = intl.locale !== 'en' ? intl.locale : ''

	return (
		<>
			{typeof window !== 'undefined' &&
			window.location.pathname === `/${locale}` ? (
				<Anchor link={link}>{children}</Anchor>
			) : (
				<AnchorLink to={`/${locale}${link}`} title={link} stripHash>
					{children}
				</AnchorLink>
			)}
		</>
	)
}

CheckLocation.propTypes = {
	children: PropTypes.node.isRequired,
	link: PropTypes.string.isRequired,
}

export default CheckLocation
