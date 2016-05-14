
// 1. Create an app directory called 'burger'

// 2. Make a package.json file `npm init`

// 3. Install Express npm package `npm install express --save`

// 4. Create the 'server.js' file

// 5. Install the handlebars npm package `npm install express-handlebars --save`

// 6. Install the method-override npm package `npm install method-override --save`

// 7. Install the body-Parser npm package `npm install body-parser --save`

// 8. Install MySQL npm package `npm install mysql --save`

// 10. Setup the following npm packages inside of the `server.js` file
//     * express
//     * method-override
//     * body-parser

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//look to see if the server has a port for us, if not go to 3000
var port = process.env.PORT || 3000;
app.listen(port);