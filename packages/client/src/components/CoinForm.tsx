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
	};

	return (
		<form
			onSubmit={handleSubmit(({ currency }) => {
				formatCurrencyOnEvent();
				getCoinsFromAmount(currency);
			})}
		>
			<label
				htmlFor="currency"
				className="block text-sm font-medium leading-5 text-gray-700"
			>
				Dollar Amount
			</label>
			<div className="mt-1 relative rounded-md shadow-sm">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<span className="text-gray-500 sm:text-sm sm:leading-5">$</span>
				</div>
				<input
					id="currency"
					className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
					placeholder="0.00"
					aria-describedby="price-currency"
					autoComplete="transaction-amount"
					inputMode="numeric"
					name="currency"
					ref={register({
						required: true,
						// TODO::073120 Is pattern matching required for input?
						// TODO::080120 If I18n is required this regex will need to change
						pattern: {
							value: /^\$?[0-9,]*(\.[0-9]+)?$/,
							message:
								'The input must be formatted like a currency (ex $100.00 or 100 or 1000)',
						},
					})}
					onBlur={formatCurrencyOnEvent}
				/>
				{errorMessage ? (
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						<svg
							className="h-5 w-5 text-red-500"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				) : null}
			</div>
			{errorMessage ? (
				<p className="mt-2 text-sm text-red-600" role="alert">
					{errorMessage}
				</p>
			) : null}
			<span className="inline-flex rounded-md shadow-sm">
				<button
					type="submit"
					className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
				>
					Submit
				</button>
			</span>
		</form>
	);
}
