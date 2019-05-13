const express = require('express');
const configureMiddleware = require('../data/config/middleware');

const usersRouter = require('../data/users/users-router');

const server = express();

configureMiddleware(server)

server.use('/api/users', usersRouter)

server.get('/', (req, res, next) => {
  res.send(`<h2>We are LIVE!<h2>`)
})

module.exports = server