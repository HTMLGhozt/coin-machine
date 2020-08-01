export async function convertCurrency(amount: number) {
	const response = await fetch('/api/convert-currency', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({ currency: amount }),
	});
	return response.json();
}
