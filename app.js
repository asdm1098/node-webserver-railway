const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

//Servir contenido estático
app.use( express.static('public') );


app.get('/', function (req, res) {
    res.render('home', {
        name: 'Stiven Diaz',
        title: 'Course NodeJS'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        name: 'Stiven Diaz',
        title: 'Course NodeJS'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        name: 'Stiven Diaz',
        title: 'Course NodeJS'
    });
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
});

app.get('/', function (req, res) {
    res.send('Home Page');
});

app.listen(port, ()=> {
    console.log(`Port listening at ${port}`);
});