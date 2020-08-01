import Router from '@koa/router';
import amountToCoins from '../utils/amountToCoins';

const router = new Router();

router.post('/convert-currency', (ctx): void => {
	const { currency } = ctx.request.body;

	const total = +currency * 100;
	if (typeof total !== 'number' || Number.isNaN(total)) {
		ctx.throw(422, { error: "Currency couldn't be converted to a number." });
	}

	ctx.body = amountToCoins(total);
});

export default router;
