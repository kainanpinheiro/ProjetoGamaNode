const LivroRoutes = require('./routes/livro-routes')
const LocacaoRoutes = require('./routes/locacao-routes')


module.exports = [
    ...LivroRoutes,
    ...LocacaoRoutes
]