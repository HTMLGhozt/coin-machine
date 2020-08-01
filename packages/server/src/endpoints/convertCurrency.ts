import Router from '@koa/router';
import amountToCoins from '../utils/amountToCoins';
import currencyToFloat from '../utils/currencyToFloat';

const router = new Router({
	prefix: '/api'
});

router.post('/convert-currency', (ctx): void => {
	const { currency } = ctx.request.body;

	// multiplying the currency by 100 avoids problems with floating point math
	// https://0.30000000000000004.com/
	const total = currencyToFloat(currency) * 100;
	if (typeof total !== 'number' || Number.isNaN(total)) {
		ctx.throw(422, { error: "Currency couldn't be converted to a number." });
	}

	ctx.body = amountToCoins(total);
});

export default router;
