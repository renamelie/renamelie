const path = require('path')

const {
	NODE_ENV,
	URL: NETLIFY_SITE_URL = 'http://renamelie.netlify.app',
	DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
	CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
	siteMetadata: {
		title: `Ren Amélie`,
		label: 'developer & freelance',
		description: `Ren Amélie is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.`,
		author: `@ren_amelie`,
		siteUrl: `https://renamelie.com/`,
		image: '/og.png',
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
				defaultLanguage: `fr`,
				// Redirects to `/en` in the route `/`
				redirect: false,
			},
		},
		`gatsby-plugin-anchor-links`,
		// Cross-Site Scripting // Secu
		// {
		// 	resolve: `gatsby-plugin-csp`,
		// 	options: {
		// 		directives: {
		// 			'style-src': `'self' 'unsafe-inline'`,
		// 		},
		// 	},
		// },
		// Create robots.txt // SEO
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				resolveEnv: () => NETLIFY_ENV,
				env: {
					production: {
						policy: [{ userAgent: '*' }],
					},
					'branch-deploy': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null,
					},
					'deploy-preview': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null,
					},
				},
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify`,
		// 'gatsby-plugin-htaccess',
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
