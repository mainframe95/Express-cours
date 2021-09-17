let express = require('express');
var app = express();
const port = 3000;
const routerMiddleware = require('./application');

/* les middleware sont appelé avant l'exécution de chaque requete
 * pour éxécuté une fonction 
* il existe 4 types
* Middleware niveau application
* Middleware niveau routeur
* Middleware de traitement d’erreurs
* Middleware intégré
* Middleware tiers
*/

// Middleware niveau application
const requestTime = function (req, res, next) {
    req.requestTime = new Date();
    next();
};

// declaration de la function middleware pour recuperer le ip et le hostname du client
const getClientIp = function (req, res, next) {
    console.log('client ip', req.hostname, req.ip);
    if (req.hostname !== '127.0.0.1') {
        res.status(403).end()
    } else {
        next();
    }
};

// app.use('/router.middleware', routerMiddleware);
app.use(requestTime);
app.use(getClientIp);

/**
 * middleware mont sur le chemin user peut importe la methode HTTP
 */
app.use('/user', function(req, res, next) {
    console.error('Request URL:', req.originalUrl);
    next();
  }, function (req, res, next) {
    console.error('Request Type:', req.method);
    next();
  });

app.get('/', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
});

app.get('/user', (req,res) => {
    res.send('route user')
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});