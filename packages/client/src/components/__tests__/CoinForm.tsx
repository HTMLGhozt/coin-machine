import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import { default as mockFormatCurrency } from '../../utils/formatCurrency';
import { CoinContext } from '../DisplayContainer';
import CoinForm from '../CoinForm';

jest.mock('../../utils/formatCurrency.ts');

/*
	Disclosure:
	Normally I'd rely more on e2e tests for many of the unit tests
	here. I'm playing some, because it's been a while since I've
	had the chance to do unit testing in JavaScript.
*/

test('renders an input with a label "Dollar Amount"', () => {
	const { getByLabelText } = render(<CoinForm />);
	const input = getByLabelText(/Dollar Amount/i);

	expect(input).toHaveAttribute('autocomplete', 'transaction-amount');
	// type="number" for currency interactions isn't appropriate.
	// https://css-tricks.com/finger-friendly-numerical-inputs-with-inputmode/
	expect(input).toHaveAttribute('inputmode', 'numeric');
});

test('inputing a valid number formats currency on blur', async () => {
	const { getByLabelText } = render(<CoinForm />);
	const input = getByLabelText(/Dollar Amount/i);
	const value = '2.01';

	await user.type(input, value);
	await fireEvent.blur(input);

	expect(mockFormatCurrency).toHaveBeenCalledWith(value);
	expect(mockFormatCurrency).toHaveBeenCalledTimes(1);
});

test('entering an invalid value displays an error message', async () => {
	const { getByLabelText, getByRole, getByText, debug } = render(<CoinForm />);
	const input = getByLabelText(/Dollar Amount/i) as HTMLInputElement;
	const submitButton = getByText(/submit/i);

	await user.type(input, 'abc');
	await user.click(submitButton);

	await waitFor(() => {
		const errorMessage = getByRole('alert');
		debug(input);
		console.log({ input: input.value })
		expect(errorMessage).toBeInTheDocument();
		expect(errorMessage).toHaveTextContent(
			'The input must be formatted like a currency',
		);
	});
});

test("entering an invalid value doesn't make a call to the API", async () => {
	const mockFetch = jest.fn().mockResolvedValueOnce(null);
	const wrapper = (
		<CoinContext.Provider
			value={{ getCoinsFromAmount: mockFetch, coinMap: null }}
		>
			<CoinForm />
		</CoinContext.Provider>
	);
	const { getByLabelText, getByText, getByRole } = render(wrapper);
	const coinInput = getByLabelText(/Dollar Amount/i) as HTMLInputElement;
	const submit = getByText(/submit/i);

	coinInput.value = 'abc'
	fireEvent.click(submit);

	await waitFor(() => {
		getByRole('alert');
		expect(mockFetch).toHaveBeenCalledTimes(0);
	});
});
