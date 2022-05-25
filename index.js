'use strict';
const app = require('./app');
// Constants configuration
const PORT = 4000;
const HOST = '0.0.0.0';

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
