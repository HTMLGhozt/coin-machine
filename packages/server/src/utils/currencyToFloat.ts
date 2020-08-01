export default function currencyToFloat(amount: string) {
	const strippedCurrency = amount.replace(/[$,]+/g, '');
	return parseFloat(strippedCurrency);
}