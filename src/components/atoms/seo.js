/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

function SEO({ description, lang, meta, title }) {
	const intl = useIntl()
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						label
						siteUrl
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description
	const defaultTitle = `${site.siteMetadata.title} { ${site.siteMetadata.label} }`
	const language = intl.locale || lang

	return (
		<Helmet
			htmlAttributes={{
				lang: language,
			}}
			title={title || 'Home'}
			titleTemplate={title ? `%s || ${defaultTitle}` : `${defaultTitle}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:url`,
					content: site.siteMetadata.siteUrl || `https://renamelie.com/`,
				},
				{
					property: `og:image`,
					content:
						`https://avatars2.githubusercontent.com/u/60107273?s=460&u=514fee63df22a9b1fee334e4c1d9a72a8b5f3019&v=4` ||
						'',
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
}

export default SEO
