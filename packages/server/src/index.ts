import Koa from 'koa';

const app = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello World';
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.info(`Running on port: ${port}`)
});