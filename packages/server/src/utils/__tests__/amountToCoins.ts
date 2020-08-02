import tape from 'tape';
import amountToCoins from '../amountToCoins';

const generateComparison = (
	amount: number,
	compare: Record<string, number>,
): [Record<string, number>, Record<string, number>, string] => [
	amountToCoins(amount * 100),
	compare,
	`parsed ${amount}`,
];

tape('given a valid amount it should return the correct number of coins', t => {
	t.plan(3);
	t.deepLooseEqual(
		...generateComparison(0.99, {
			'silver-dollar': 0,
			'half-dollar': 1,
			quarter: 1,
			dime: 2,
			nickel: 0,
			penny: 4,
		}),
	);

	t.deepLooseEqual(
		...generateComparison(1.56, {
			'silver-dollar': 1,
			'half-dollar': 1,
			quarter: 0,
			dime: 0,
			nickel: 1,
			penny: 1,
		}),
	);

	t.deepLooseEqual(
		...generateComparison(12.85, {
			'silver-dollar': 12,
			'half-dollar': 1,
			quarter: 1,
			dime: 1,
			nickel: 0,
			penny: 0,
		}),
	);
});
