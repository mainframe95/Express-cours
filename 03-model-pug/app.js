let express = require('express');
var app = express();
app.set('views', './'); // specify the views directory
// app.set('view engine', 'ntl')
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
  });

app.listen(3000, () => {
    console.log('start:3000')
})