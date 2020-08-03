import Koa from 'koa';
import path from 'path';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import convertCurrencyRouter from './endpoints/convertCurrency';

const app = new Koa();

app.use(bodyParser());
app.use(convertCurrencyRouter.routes());

if (process.env.NODE_ENV === 'production') {
	app.use(serve(path.resolve(__dirname, '../../', 'client/dist')));
}

const port = process.env.PORT || '8000';

if (require.main === module) {
	app.listen(port, () => {
		console.info(`Running on port: ${port}`);
	});
}

export default app;
