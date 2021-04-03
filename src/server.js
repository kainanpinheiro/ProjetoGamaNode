'use strict';

const dotenv = require('dotenv')
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger');
const DbConnection = require('./database');
const Routes = require('./routes')
const Pack = require('../package');
const HapiJwt = require('hapi-auth-jwt2');

dotenv.config()

class Server {

    static async init() {

        const server = Hapi.server({ port: process.env.PORT || 3000, host: 'localhost' });

        server.route(Routes)

        await server.start();

        console.log('Server running on %s', server.info.uri);
    };
}

module.exports = Server