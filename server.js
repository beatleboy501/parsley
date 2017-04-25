/** @module Server */

/** The express framework is used for routing in this node app */
var express = require('express');
var apiRoutes = express.Router();
var app = express();

/** Body parsing middleware.
 * Parse incoming request bodies in a middleware before the handlers,
 * available under the <i>req.body</i> property. */
var bodyParser = require('body-parser');
/** Morgan is a HTTP request logger middleware for node */
var morgan = require('morgan');
/** Mongoose is a MongoDB object modeling tool */
var mongoose = require('mongoose');
/** Unirest is a set of lightweight HTTP libraries */
var unirest = require('unirest');
/** JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties.  */
var jwt = require('jsonwebtoken');
/** The app configuration */
var config = require('./config');
/** The User model */
var User = require('./app/models/user');
/** The port used. Default is 8080 */
var port = process.env.PORT || 8080;

// If we were also going to include calls to the server
// this would connect our app to the db
//mongoose.connect(config.database);

/** Add middleware to the app router */
app.set('superSecret', config.secret);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan(config.env));
app.use(express.static('app/assets/javascripts'));
app.use('/app/assets/javascripts', express.static('app/assets/javascripts'));

/** App routes */

/**
 * @name <b> / </b> - The home route will bring up the home page
 * app.get
 * @function
 */
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('out'));

app.get('/app-documentation', function (req, res) {
  res.sendFile(__dirname + '/out/index.html');
});

app.listen(port);
