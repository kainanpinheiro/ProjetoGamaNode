const AuthHandler = require('./auth-handler');

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/login',
    config: {
      auth: false,
      handler: AuthHandler.autenticate,
      description: 'Login do usuário',
      notes: 'Retorna o token',
      tags: ['api', 'Login'],
    },
  },
];
