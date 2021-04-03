process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

const Server = require('./src/server')

Server.init()
