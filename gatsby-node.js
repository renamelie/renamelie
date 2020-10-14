const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions
	const template = path.resolve('src/templates/Project.js')

	const result = await graphql(`
		{
			allProjectsYaml {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)

	if (result.errors) throw result.errors

	result.data.allProjectsYaml.edges.forEach(({ node }) => {
		const { slug } = node

		createPage({
			path: slug,
			component: template,
			context: { slug },
		})
	})
}
