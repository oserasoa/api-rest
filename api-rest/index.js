const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const request = require('request');
const async = require('async');
const hoteles = require("./src/data/data");

const port = process.env.PORT || 3001;

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static('assets'));

app.get('/hoteles', (req, res) => {

    var stars = parseInt(req.query.stars);

    var hotel = [];

    if (stars === 0) {
        hotel = hoteles;
    } else {
        hotel = hoteles.filter(function (h) {
            return h.stars === stars;
        })
    }
    res.send(hotel);
});

app.listen(port, () => {
    console.log("Escuchando por el puerto 3001");
})