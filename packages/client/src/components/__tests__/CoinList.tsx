import React from 'react';
import { render } from '@testing-library/react';
import { CoinContext } from '../DisplayContainer';
import CoinList from '../CoinList';

const testList = {
	'silver-dollar': 0,
	'half-dollar': 1,
	quarter: 1,
	dime: 2,
	nickel: 0,
	penny: 4,
};

test('Given a list of records it should render all of them', () => {
	const wrapper = (
		<CoinContext.Provider
			value={{ getCoinsFromAmount: () => {}, coinMap: { ...testList } }}
		>
			<CoinList />
		</CoinContext.Provider>
	);
	const { getByText } = render(wrapper);

	Object.entries(testList).forEach(([key, value]) => {
		const lineItem = getByText(new RegExp(key, 'i'));
		expect(lineItem).toBeInTheDocument();
		expect(lineItem).toHaveTextContent(`${value}`);
	});
});
