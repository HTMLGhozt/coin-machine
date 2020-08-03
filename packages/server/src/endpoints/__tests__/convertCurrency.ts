import http from 'http';
import tape from 'tape';
import supertest from 'supertest';
import app from '../../index';

type HTTPError = {
	status: number;
	text: string;
	method: string;
	path: string
};

tape('A valid POST /api/convert-currency', t => {
	supertest(http.createServer(app.callback()))
		.post('/api/convert-currency')
		.send({ currency: '$1.91' })
		.set('Accept', 'application/json')
		.expect(200)
		.expect('Content-Type', /json/)
		.end((err, res) => {
			const expected = {
				'silver-dollar': 1,
				'half-dollar': 1,
				quarter: 1,
				dime: 1,
				nickel: 1,
				penny: 1,
			};
			const response = res.body;

			t.error(err, "Shouldn't return an error.");
			t.deepLooseEqual(
				response,
				expected,
				'Retrieved the correct object of coin totals',
			);
			t.end();
		});
});

tape('An invalid POST /api/convert-currency', t => {
	supertest(http.createServer(app.callback()))
		.post('/api/convert-currency')
		.send({ currency: 'abc' })
		// .set('Accept', 'application/json')
		.expect(422)
		.end((_, res) => {
			const { text } = res.error as HTTPError;

			t.ok(!!text, 'error message should exist');
			t.end();
		});
});

