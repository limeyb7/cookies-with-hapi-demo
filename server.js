const Hapi = require('hapi');
const Inert = require('inert');
const routes = require('./lib/routes.js');

const server = new Hapi.Server();

server.register(Inert, function () {
    server.connection({
        port: process.env.PORT || 8080
    });

    server.route(routes);

    server.start(function() {
        console.log('Server running at: ' + server.info.uri + '!');
    });
});

module.exports = server;
