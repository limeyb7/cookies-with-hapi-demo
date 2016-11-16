const test = require("tape");
const server = require('../server.js');

test("'/' returns 200 statusCode", function (t) {
    server.inject({method: 'GET', url: '/'}, function (res) {
        t.equal(res.statusCode, 200, 'page loaded successfully');
        server.stop();
        t.end();
    });
});

test("'/static/{file*}' returns 200 statusCode", function (t) {
    server.inject({method: 'GET', url: '/static/public/css/main.css'}, function (res) {
        t.equal(res.statusCode, 200, 'static file retrieved');
        server.stop();
        t.end();
    });
});
