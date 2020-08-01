import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import formatCurrency from '../utils/formatCurrency';
import getError from '../utils/getError';
import { CoinContext } from './DisplayContainer';

export default function CoinForm() {
	const { register, handleSubmit, errors, getValues, setValue } = useForm();
	const { getCoinsFromAmount } = useContext(CoinContext);

	const errorMessage = getError({ name: 'currency', errors });
	const formatCurrencyOnEvent = () => {
		const currency = getValues('currency');
		if (currency) {
			setValue('currency', formatCurrency(currency));
		}
	}

	return (
		<form
			onSubmit={handleSubmit(({ currency }) => {
				formatCurrencyOnEvent();
				getCoinsFromAmount(currency);
			})}
		>
			<label htmlFor="currency">Dollar Amount</label>
			<input
				id="currency"
				ref={register({
					required: true,
					// TODO::073120 Is pattern matching required for input?
					// TODO::080120 If I18n is required this'll need to change
					pattern: {
						value: /^\$?[0-9,]*(\.[0-9]+)?$/,
						message:
							'The input must be formatted like a currency (ex $100.00 or 100 or 1000)',
					},
				})}
				onBlur={formatCurrencyOnEvent}
				autoComplete="transaction-amount"
				inputMode="numeric"
				name="currency"
			/>
			{errorMessage ? <p>{errorMessage}</p> : null}
			<button disabled={!!errorMessage} type="submit">submit</button>
		</form>
	);
}
