'use strict';

const path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.server({
  port: process.env.PORT || 5000,
  host: '0.0.0.0',
  routes: {
    files: {
      relativeTo: path.join(__dirname, '../app')
    }
  }
});

const init = async () => {

  await server.register(Inert);
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist',
        index: ['index.html']
      }
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();