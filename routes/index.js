const express = require('express');
const router = express.Router();
const api = express();
// Import api routes
const breed = require('./breed')
/* GET home page. */
const index = router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

api.use('/', index);
/* API Router. */
api.use('/api', breed);

module.exports = api;
