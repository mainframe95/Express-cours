
var express = require('express');
var Book = express();

// imbriquer plusiseur methode HTTP
Book.route('/').get(function(req, res) {
    res.send('Get a random book');
}).post(function(req, res) {
    res.send('Add a book');
}).put(function(req, res) {
    res.send('Update the book');
});

module.exports = Book;
