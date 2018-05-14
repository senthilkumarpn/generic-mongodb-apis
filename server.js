const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const cors = require('cors');
const mongodb = require('./server/routes/mongodb/mongo.api');

// Parsers
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false}));

var originsWhitelist = [];
var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:false
}

app.use(cors(corsOptions));
// API location
app.use('/mongodb', mongodb);

//Setting Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () =>
	{ console.log(`Running on localhost:${port}`);
});
