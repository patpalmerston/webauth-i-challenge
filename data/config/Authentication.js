// const bcrypt = require('bcryptjs');
// const db = require('../users/users-model');

// function restricted(req, res, next) {
//   const { username, password } = req.headers;

//   if(username && password) {
//     db.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: 'Invalid credentials' })
//         }
//       })
//       .catch(err => {
//         res.status(500).json({ message: 'unexpected error!' })
//       })
//   } else {
//     res.status(400).json({ message: 'Incomplete credentials provided' })
//   }
// }

// module.exports = restricted