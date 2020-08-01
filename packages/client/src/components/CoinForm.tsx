import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import getError from '../utils/getError';
import { CoinContext } from './DisplayContainer';

export default function CoinForm() {
	const { register, handleSubmit, errors } = useForm();
	const { getCoinsFromAmount } = useContext(CoinContext);
	const errorMessage = getError({ name: 'currency', errors });

	return (
		<form
			onSubmit={handleSubmit(({ currency }) => (getCoinsFromAmount(currency)))}
		>
			<label htmlFor="currency">Dollar Amount</label>
			<input
				id="currency"
				ref={register({
					required: true,
					// TODO::073020 Is pattern matching required for input?
					pattern: {
						value: /[0-9,.]*/,
						message:
							'The input must be formatted like a currency (ex $100.00 or 100 or 1000)',
					},
				})}
				autoComplete="transaction-amount"
				inputMode="numeric"
				name="currency"
			/>
			{errorMessage ? (
				<p>{errorMessage}</p>
			) : null}
			<button type="submit">submit</button>
		</form>
	);
}
