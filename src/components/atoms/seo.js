/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

function SEO({ description, title, meta }) {
	const { pathname } = useLocation()
	const intl = useIntl()
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						defaultTitle: title
						defaultDescription: description
						defaultImage: image
						author
						label
						siteUrl
					}
				}
			}
		`
	)

	const {
		defaultTitle,
		defaultDescription,
		defaultImage,
		author,
		label,
		siteUrl,
	} = site.siteMetadata

	const seo = {
		title: title
			? `${title} || ${defaultTitle} { ${label} }`
			: `${defaultTitle} { ${label} }`,
		description: description || defaultDescription,
		image: `${siteUrl}${defaultImage}`,
		language: intl.locale || 'en',
		url: `${siteUrl}${pathname}`,
	}

	return (
		<Helmet
			htmlAttributes={{
				lang: seo.language,
			}}
			title={title}
			defaultTitle={seo.title}
			titleTemplate={`%s | ${defaultTitle} { ${label} }`}
			meta={[
				{
					name: `description`,
					content: seo.description,
				},
				{
					name: `image`,
					content: seo.image,
				},
				{
					property: `og:title`,
					content: seo.title,
				},
				{
					property: `og:description`,
					content: seo.description,
				},
				{
					property: `og:image`,
					content: seo.image,
				},
				{
					property: `og:url`,
					content: seo.url,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: author || ``,
				},
				{
					name: `twitter:title`,
					content: seo.title,
				},
				{
					name: `twitter:description`,
					content: seo.description,
				},
				{
					name: `twitter:image`,
					content: seo.image,
				},
			].concat(meta)}
		/>
	)
}

SEO.propTypes = {
	description: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
}

SEO.defaultProps = {
	description: null,
	meta: [],
	title: null,
}

export default SEO
