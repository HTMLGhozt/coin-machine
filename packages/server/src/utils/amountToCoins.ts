enum usCoinMap {
	'silver-dollar' = 100,
	'half-dollar' = 50,
	quarter = 25,
	dime = 10,
	nickel = 5,
	penny = 1,
}

type Template = Record<string, number | string>;

const getTemplate = (template: Template) => {
	return Object.keys(template).reduce((memo: Record<string, 0>, key) => {
		if (Number.isNaN(+key)) {
			memo[key] = 0;
		}
		return memo;
	}, {});
};

const getCoins = (template: Template) => {
	return Object.keys(template)
		.reduce((memo: number[], key) => {
			if (!Number.isNaN(+key)) {
				memo.push(+key);
			}
			return memo;
		}, [])
		.sort((a, b) => b - a);
};

export default function amountToCoins(
	amount: number,
	template: Template = usCoinMap,
) {
	const coinOutput = getTemplate(template);
	if (amount === 0) return coinOutput;

	const coins = getCoins(template);
	for (const coin of coins) {
		const totalCoins = Math.floor(amount / coin);
		amount -= totalCoins * coin;
		coinOutput[template[coin]] += totalCoins;
	}

	return coinOutput;
}
