'use strict';
const app = require('./app');
// Constants configuration
const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(process.env.PORT || PORT);
console.log(`Running on http://${HOST}:${PORT}`);
