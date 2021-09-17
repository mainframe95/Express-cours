
var express = require('express');
var router = express.Router();

// un middleware qui va s'executer lors que chaque appele
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// cet middleware est monter sur le path /user et est appeler a chaque req HTTP
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if user ID === 0, on passe au prochain router
  if (req.params.id == 0) next('route');
  else next(); //
}, function (req, res, next) {
  res.send('regular');
});

// si le user ID = 0 elle est executer
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.send('special');
});

// export router
module.exports = router;
