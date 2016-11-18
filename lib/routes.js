const handlers = require('./handlers.js');

module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: handlers.home,
    config: {
      state: {
        parse: true,
        failAction: 'log'
      }
    }
  },

  {
    method: 'GET',
    path: '/name',
    handler: handlers.name,
    config: {
      state: {
        parse: true,
        failAction: 'log'
      }
    }
  }
];
