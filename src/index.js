import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1123.92).format('$0,0.00');
debugger;
console.log(`Pay ${courseValue} for this course`);
