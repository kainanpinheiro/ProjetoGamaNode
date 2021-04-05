const CadastroRoutes = require('./routes/cadastro-routes');
const LivroRoutes = require('./routes/livro-routes');
const LocacaoRoutes = require('./routes/locacao-routes');
const LocacaoItemRoutes = require('./routes/locacaoitem-routes');
const AuthRoutes = require('./security/auth-routes');

module.exports = [
  ...LivroRoutes,
  ...LocacaoRoutes,
  ...CadastroRoutes,
  ...LocacaoItemRoutes,
  ...AuthRoutes,
];
