import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1123.92).format('$0,0.00');

console.log(`Pay ${courseValue} for this course`);  // eslint-disable-line no-console
