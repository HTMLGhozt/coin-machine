import React, { createContext, useState, useCallback } from 'react';
import { convertCurrency } from '../actions/convertCurrency';

type CoinDisplay = Record<string, number> | null;

type CoinDisplayContext = {
	coinMap: CoinDisplay;
	getCoinsFromAmount: (amount: number) => void;
};

// I don't think a context is really needed here for the size of
// the application, but I haven't really tested context with 
// react-testing-library

export const CoinContext = createContext<CoinDisplayContext>({
	coinMap: null,
	getCoinsFromAmount: () => {},
});

export default function DisplayContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	const [coinMap, setCoinMap] = useState<CoinDisplay>(null);

	const getCoinsFromAmount = useCallback(async (amount: number) => {
		setCoinMap(null);
		const tempCoinMap = await convertCurrency(amount);
		setCoinMap(tempCoinMap);
	}, []);

	return (
		<CoinContext.Provider value={{ coinMap, getCoinsFromAmount }}>
			{children}
		</CoinContext.Provider>
	);
}
