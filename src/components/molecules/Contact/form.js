import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useIntl } from 'gatsby-plugin-intl'

import { pxToRem } from '@styles'

const Form = ({ className }) => {
	const intl = useIntl()
	const { handleSubmit, register, errors } = useForm()
	const onSubmit = (data, e) => {
		console.log(JSON.stringify(data))
		e.target.submit()
	}

	return (
		<form
			className={className}
			name="Contact Form"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			onSubmit={handleSubmit(onSubmit)}
		>
			<input type="hidden" name="form-name" value="Contact Form" />
			<input type="hidden" name="bot-field" />
			<div className="formGroup">
				<label htmlFor="name">
					<input
						type="text"
						placeholder={intl.formatMessage({ id: 'contact.name' })}
						name="name"
						ref={register({
							required: intl.formatMessage({ id: 'contact.required' }),
							maxLength: 80,
						})}
					/>
					{errors.name && errors.name.message}
				</label>
			</div>
			<div className="formGroup">
				<label htmlFor="email">
					<input
						type="email"
						placeholder="Email"
						name="email"
						ref={register({
							required: intl.formatMessage({ id: 'contact.required' }),
							maxLength: 80,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'invalid email address',
							},
						})}
					/>
					{errors.email && errors.email.message}
				</label>
			</div>
			<div className="formGroup">
				<label htmlFor="phone">
					<input
						type="text"
						placeholder={intl.formatMessage({ id: 'contact.phone' })}
						name="phone"
						ref={register({
							required: intl.formatMessage({ id: 'contact.required' }),
							minLength: 6,
							maxLength: 12,
						})}
					/>
					{errors.phone && errors.phone.message}
				</label>
			</div>
			<div className="formGroup">
				<label htmlFor="message">
					<textarea
						placeholder={intl.formatMessage({ id: 'contact.formMessage' })}
						name="message"
						ref={register({
							required: intl.formatMessage({ id: 'contact.required' }),
						})}
					/>
					{errors.message && errors.message.message}
				</label>
			</div>
			<div className="buttonForm">
				<button type="submit">
					{intl.formatMessage({ id: 'contact.send' })}
				</button>
			</div>
		</form>
	)
}

Form.propTypes = {
	className: PropTypes.string,
}

export default styled(Form)`
	flex: 2;
	border: 2px solid ${({ theme }) => theme.accentColor};
	padding: ${pxToRem(20)};
	border-radius: ${pxToRem(20)};

	textarea:focus,
	input:focus {
		box-shadow: 0 0 5px 2px ${({ theme }) => theme.boxBgColor};
	}

	textarea {
		resize: none;
		height: 200px;
	}

	.formGroup,
	input {
		border-radius: ${pxToRem(10)};
	}

	.formGroup > *,
	input,
	textarea,
	.buttonForm > * {
		border-color: transparent;
		border-radius: ${pxToRem(10)};
		transition: 0.5s;

		font-family: 'Montserrat', sans-serif;
		width: 100%;
		outline: none;
	}

	.formGroup,
	.buttonForm {
		display: flex;
		justify-content: center;
		margin: ${pxToRem(14)};
		border-radius: ${pxToRem(10)};
	}

	.formGroup input,
	.formGroup textarea {
		padding: ${pxToRem(10)};
		background-color: ${({ theme }) => theme.accentLightColor};
	}

	button {
		cursor: pointer;
		color: var(--white);
		background-color: ${({ theme }) => theme.accentLightColor};
		width: ${pxToRem(100)};
		padding: ${pxToRem(10)};
		border-radius: ${pxToRem(20)};
		text-transform: uppercase;
		outline: none;
	}

	button:hover {
		background-color: ${({ theme }) => theme.accentColor};
	}
`
