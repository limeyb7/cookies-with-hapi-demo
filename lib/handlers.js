module.exports = {

    home: function(request, reply) {
        var cookieName = (request.query.name || '');
       if(cookieName){
          reply.file('./public/views/index.html').state('nameCookie', {name: cookieName})
        } else {
          reply.file('./public/views/index.html');
        }
    },

    name: function(request, reply) {
        if(request.state.nameCookie && request.state.nameCookie.name) {
          reply('hello ' + request.state.nameCookie.name)
        } else {
          reply('hi stranger');
        }

    }
};
