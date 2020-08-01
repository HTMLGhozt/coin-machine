import React, { useContext } from 'react';
import { CoinContext } from './DisplayContainer';

export default function CoinList() {
	const { coinMap } = useContext(CoinContext);

	return (
		<ul>
			{coinMap
				? Object.entries(coinMap).map(([key, value]) => (
						<li key={key}>
							{key}: {value}
						</li>
				  ))
				: null}
		</ul>
	);
}
