/**
 * Used for assignments
 */
var dishRouter = require('./dishRouter'),
    promoRouter = require('./promoRouter'),
    leadershipRouter = require('./leaderRouter'),
    express = require('express'),
    morgan = require('morgan');
var serverCredentials = {host: 'localhost', port: 3000};
var app = express()
    .use(morgan('dev'))
    .use(express.static(__dirname + '/public'))
    .use('/dishes',dishRouter)
    .use('/promotions',promoRouter)
    .use('/leadership',leadershipRouter)
    .listen(serverCredentials.port, serverCredentials.host, function(){
        console.log(`Server running at http://${serverCredentials.host}:${serverCredentials.port}/`);
    });

