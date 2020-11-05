import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProjectTechs = ({ className, techstack }) => {
	return (
		<div className={className}>
			<h3 className="metatitle">
				Tools & Technologies <span>The tech stack I was involved with.</span>
			</h3>
			<ul>
				{techstack.map(tech => (
					<li key={tech}>{tech}</li>
				))}
			</ul>
		</div>
	)
}

ProjectTechs.propTypes = {
	className: PropTypes.string.isRequired,
	techstack: PropTypes.array.isRequired,
}

export default styled(ProjectTechs)`
	ul {
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: calc(var(--spacer) / 2);
	}

	li {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: calc(var(--spacer) / 4);
		text-align: center;
		background: ${({ theme }) => theme.boxBgColor};
		border-radius: var(--border-radius);
		border: 0.05rem solid transparent;
		color: ${({ theme }) => theme.accentTextColor};
		font-size: var(--font-size-small);
	}
`
