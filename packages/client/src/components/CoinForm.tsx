import React from 'react';
import { useForm } from 'react-hook-form';
import getError from './utils/getError';

export default function CoinForm() {
	const { register, handleSubmit, errors } = useForm();
	const errorMessage = getError({ name: 'currency', errors });

	return (
		<form onSubmit={handleSubmit(() => {})}>
			<label htmlFor="currency">Dollar Amount</label>
			<input
				id="currency"
				ref={register({
					required: true,
					// TODO::073020 Is pattern matching required for input?
					pattern: {
						value: /(?=.*\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{1,2})?$/,
						message:
							'The input must be formatted like a currency (ex $100.00 or 100 or 1000)',
					},
				})}
				autoComplete="transaction-amount"
				inputMode="numeric"
				name="currency"
			/>
			{errorMessage ? (
				<p className="mt-2 text-sm text-red-600">{errorMessage}</p>
			) : null}
			<button type="submit">submit</button>
		</form>
	);
}
