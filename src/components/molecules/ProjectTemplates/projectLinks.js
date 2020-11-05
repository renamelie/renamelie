import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon, Button } from '@components'

const ProjectLinks = ({ className, links }) => {
	return (
		<div className={className}>
			<h3 className="metatitle">
				Links <span>Learn more on the interwebz</span>
			</h3>
			<ul>
				{links.map(link => {
					const { title, url, icon } = link
					return (
						<li key={title}>
							<Button href={url}>
								<Icon name={icon ? icon : 'Compass'} />
								{title}
							</Button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

ProjectLinks.propTypes = {
	className: PropTypes.string.isRequired,
	links: PropTypes.array.isRequired,
}

export default styled(ProjectLinks)`
	li {
		display: flex;
		align-items: center;
		margin-bottom: calc(var(--spacer) / 2.1);
	}

	a {
		display: block;
		width: 100%;
		text-transform: none;
		text-align: left;
		padding-left: 0.6rem;
	}

	svg {
		stroke: var(--text-color-light);
		width: var(--font-size-small);
		height: var(--font-size-small);
		/* margin-left: -1.2rem; */
	}
`
