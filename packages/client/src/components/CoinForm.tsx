import React, { useContext } from 'react';
import { CoinContext } from './DisplayContainer';
import Form from './forms/Form';
import TextField from './ui/TextField';
import createFormComponent from './forms/createFormComponent';
import formatCurrency from '../utils/formatCurrency';

const Input = createFormComponent(TextField);

export default function CoinForm() {
	const { getCoinsFromAmount } = useContext(CoinContext);
	
	// TODO:: with the form refactor we no longer have as direct access
	// to form state, instead we're reformatting when we submit.
	return (
		<Form
			onSubmit={({ currency }) => {
				getCoinsFromAmount(formatCurrency(currency));
			}}
		>
			<Input
				label="Dollar Amount"
				name="currency"
				placeholder="0.00"
				aria-describedby="price-currency"
				autoComplete="transaction-amount"
				inputMode="numeric"
				type="currency"
				register={{
					required: true,
					// TODO::073120 Is pattern matching required for input?
					// TODO::080120 If I18n is required this regex will need to change
					pattern: {
						value: /^\$?[0-9,]*(\.[0-9]+)?$/,
						message:
							'The input must be formatted like a currency (ex $100.00 or 100 or 1000)',
					},
				}}
			/>
			<span className="inline-flex rounded-md shadow-sm">
				<button
					type="submit"
					className="inline-flex items-center mt-4 px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150"
				>
					Submit
				</button>
			</span>
		</Form>
	);
}
