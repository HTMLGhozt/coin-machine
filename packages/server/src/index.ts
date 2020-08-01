import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import convertCurrencyRouter from './endpoints/convertCurrency';

const app = new Koa();

app.use(bodyParser());
app.use(convertCurrencyRouter.routes())

const port = process.env.PORT || "8000";

app.listen(port, () => {
	console.info(`Running on port: ${port}`);
});
