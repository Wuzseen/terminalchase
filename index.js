var port = 2500
var express = require('express');
var app = express();

var server = app.listen(port, function () {
        console.log('Example app listening on %d!', port);
});

app.set('view engine', 'pug');

if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

var routes = require('./routes/index');

var io = require('socket.io').listen(server);


io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('news', function(data) {
        console.log(data);
    });
});

app.use('/', routes);
