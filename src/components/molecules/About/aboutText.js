import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import { media } from '@styles'

const AboutText = ({ className }) => {
	const intl = useIntl()
	const skills = [
		'React',
		'Gatsby',
		'JavaScript (ES6+)',
		'HTML & CSS',
		'Node.Js',
		'NetlifyCMS',
	]

	return (
		<div className={className}>
			<p>{intl.formatMessage({ id: 'description.p1' })}</p>

			<p>{intl.formatMessage({ id: 'description.p2' })}</p>

			<p>{intl.formatMessage({ id: 'description.p3' })}</p>

			<p>{intl.formatMessage({ id: 'description.p4' })}</p>

			<ul>{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
		</div>
	)
}

AboutText.propTypes = {
	className: PropTypes.string.isRequired,
}

export default styled(AboutText)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 0 2rem;
	height: 100%;

	${media.medium`
    margin: 0 2rem 0 0;
  `}

	p {
		margin: 0px 0px 15px;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(2, minmax(140px, 200px));
		padding: 0;
		margin: 20px 0 0 0;
		overflow: hidden;
		list-style: none;

		li {
			position: relative;
			display: flex;
			align-items: center;
			margin-bottom: 10px;
			padding-left: 20px;
			font-family: var(--font-mono);
			font-size: var(--fz-xs);

			&:before {
				content: '▹';
				position: absolute;
				left: 0;
				color: ${({ theme }) => theme.accentColor};
				font-size: var(--fz-sm);
				line-height: 12px;
			}
		}
	}
`
