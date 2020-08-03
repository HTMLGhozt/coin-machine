import tape from 'tape';
import currencyToFloat from '../currencyToFloat';

tape('Given a US formatted currency should return a representative float', t => {
	t.plan(1);
	t.equal(currencyToFloat('$2,000.01'), 2000.01);
});