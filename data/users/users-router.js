const router = require('express').Router();

const db = require('./users-model');

const bcrypt = require('bcryptjs');

const restricted = require('../config/Authentication');

router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 10);

  user.password = hash;

  db.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  db.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        return res.status(200).json({ message: `welcome ${user.username}!` })
      } else {
        res.status(401).json({ message: 'Invalid Credentials log in' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/', restricted, (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err))
});

module.exports = router;