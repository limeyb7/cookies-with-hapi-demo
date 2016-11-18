const Hapi = require('hapi');
const Inert = require('inert');
const routes = require('./lib/routes.js');

const server = new Hapi.Server();

server.register(Inert, function () {
    server.connection({
        port: process.env.PORT || 8080
    });

    server.state('nameCookie', {
      ttl: 360000,
      isSecure: false,
      isHttpOnly: false,
      encoding: 'base64json',
      clearInvalid: false,
      strictHeader: true,
      path: "/"
    });

    server.route(routes);

    server.start(function() {
        console.log('Server running at: ' + server.info.uri + '!');
    });
});



module.exports = server;
