let express = require('express');
var app = express();

/**
 * middleware qui gere les errurs
 * @see https://expressjs.com/fr/guide/error-handling.html
 */

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});