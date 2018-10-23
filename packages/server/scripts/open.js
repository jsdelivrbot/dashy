// eslint-disable-next-line import/no-extraneous-dependencies
const opn = require('opn');

opn(`http://localhost:${process.env.PORT || 5000}`);
