const Router = require('express');

const { authenticate } = require('../middlewares/auth');

const account = new Router();

account.post('/signup', (req, res, next) => {
  return authenticate('signup', req, res, next);
});

account.post('/signin', (req, res, next) => {
  return authenticate('signin', req, res, next);
});

account.use((err, req, res, next) => {
  if (err.code === 'ER_DUP_ENTRY') {
    return res
      .status(200)
      .json({ status: 'error', message: 'Duplicated username' });
  }
  return res.status(400).json({});
});

module.exports = account;
