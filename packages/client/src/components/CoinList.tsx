import React, { useContext } from 'react';
import { CoinContext } from './DisplayContainer';

export default function CoinList() {
	const { coinMap } = useContext(CoinContext);

	return (
		<ul className="my-4">
			{coinMap
				? Object.entries(coinMap).map(([key, value]) => (
						<li
							className="my-1 p-2 hover:bg-green-100 transition-colors ease-in-out duration-300 rounded-md"
							key={key}
						>
							{key}: {value}
						</li>
				  ))
				: null}
		</ul>
	);
}
