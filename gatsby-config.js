const path = require('path')

module.exports = {
	siteMetadata: {
		title: `Ren Amélie`,
		name: `ren amelie`,
		label: 'developer & freelance',
		description: `Hello, Amélie, developer & freelance, nice to meet you.`,
		author: `@renamelie`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: path.join(__dirname, 'content'),
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-transformer-yaml`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/code.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@config': path.resolve(__dirname, 'src/config'),
					'@images': path.resolve(__dirname, 'src/images'),
					'@pages': path.resolve(__dirname, 'src/pages'),
					'@styles': path.resolve(__dirname, 'src/styles'),
					'@resume': path.resolve(__dirname, 'src/resume.pdf'),
					'@utils': path.resolve(__dirname, 'src/utils'),
					'@context': path.resolve(__dirname, 'src/context'),
				},
				extensions: [],
			},
		},
		`gatsby-plugin-smoothscroll`,
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				// Directory with the strings JSON
				path: `${__dirname}/src/intl`,
				// Supported languages
				languages: [`fr`, `en`],
				// Default site language
				defaultLanguage: `en`,
				// Redirects to `/en` in the route `/`
				redirect: false,
			},
		},
		`gatsby-plugin-anchor-links`,
		// 'gatsby-plugin-htaccess',
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
