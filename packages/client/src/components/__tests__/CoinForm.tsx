import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CoinForm from '../CoinForm';

test('renders an input with a label "Dollar Amount"', () => {
	const { getByLabelText } = render(<CoinForm />);
	const input = getByLabelText(/Dollar Amount/i);
	expect(input).toHaveAttribute('autocomplete', 'transaction-amount');
	// type="number" for currency interactions isn't appropriate.
	// https://css-tricks.com/finger-friendly-numerical-inputs-with-inputmode/
	expect(input).toHaveAttribute('inputmode', 'numeric');
});
