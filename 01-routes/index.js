let express = require('express');
var app = express();
const port = 3000;
const basique = require('./basique');
const book = require('./route.inbrik');
const birds = require('./birds');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 
app.use('/', basique)
app.use('/book', book)
app.use('/birds', birds)

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});