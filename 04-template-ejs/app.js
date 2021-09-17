let express = require('express');
var app = express();
app.set('views', './'); // specify the views directory
// app.set('view engine', 'ntl')
// app.set('view engine', 'pug');:
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var data = {name:'Akashdeep',
    hobbies:['playing football', 'playing chess', 'cycling']}
    res.render('index', { title: 'Hey', message: 'Hello there!', data});
  });

app.listen(3000, () => {
    console.log('start:3000')
})