var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.send('Hello from B!');
});

// POST PATCH PUT has body method route
router.post('/', function (req, res) {
    console.log('body', req.body)
    res.send('POST request to the homepage');
});

router.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    // next(); // pass control to the next handler
    res.send('all')
});

module.exports = router;