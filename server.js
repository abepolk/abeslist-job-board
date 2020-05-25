//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
require('dotenv').config();
const expressSession = require('express-session');

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//
//___________________
//Session
//___________________
const session = expressSession({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
});


//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/abeslist';

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
const db = mongoose.connection;
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.use(session);
app.use((req, res, next) => {
    if (!req.session.authType) {
        req.session.authType = 'none'
    }
    next();
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//___________________
// Controllers
//___________________
const sessionsController = require('./controllers/sessions_controller.js');
const usersController = require('./controllers/users_controller.js');
const mainController = require('./controllers/main_controller.js');

app.use('/sessions', sessionsController);
app.use('/users',  usersController);
app.use(mainController);

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));