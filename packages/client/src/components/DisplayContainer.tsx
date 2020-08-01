import React, { createContext, useState, useCallback } from 'react';
import { convertCurrency } from '../actions/convertCurrency';
import Layout from './ui/Layout';

type CoinDisplay = Record<string, number> | null;

type CoinDisplayContext = {
	coinMap: CoinDisplay;
	getCoinsFromAmount: (amount: string) => void;
};

// I don't think a context is really needed here for the size of
// the application, but I haven't really tested context with
// react-testing-library

export const CoinContext = createContext<CoinDisplayContext>({
	coinMap: {"silver-dollar":124,"half-dollar":0,"quarter":0,"dime":1,"nickel":0,"penny":0},
	getCoinsFromAmount: () => {},
});

export default function DisplayContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	const [coinMap, setCoinMap] = useState<CoinDisplay>(null);

	const getCoinsFromAmount = useCallback(async (amount: string) => {
		setCoinMap(null);
		const tempCoinMap = await convertCurrency(amount);
		setCoinMap(tempCoinMap);
	}, []);

	return (
		<CoinContext.Provider value={{ coinMap, getCoinsFromAmount }}>
			<Layout
				header={
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						Coin Machine
					</h3>
				}
			>
				{children}
			</Layout>
		</CoinContext.Provider>
	);
}
