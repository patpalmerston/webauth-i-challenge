const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const sessionConfig = {
  name: 'monkey',
  secret: 'keep it secret, keep it safe',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
  },
  httpOnly: true,
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: require('../dbConfig'), // maybe not?
    tablename: 'session',
    sidfieldname:'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  })
  
}

module.exports = server => {
  server.use (morgan('dev'));
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig))
}