export const numberFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	// @ts-ignore
	signDisplay: 'never'
});

export default function formatCurrency(amount: number | string) {
	if (typeof amount === 'string' && Number.isNaN(+amount)) {
		// TODO::080120 If we're doing i18n commas and periods will have to be fetched dynamically
		amount = amount.replace(/[$,]+/g, '');
		if (Number.isNaN(+amount)) return amount;
	}
	return numberFormatter.format(+amount).substr(1);
}
