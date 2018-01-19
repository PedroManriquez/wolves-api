const express = require('express');
const router = express.Router();
const api = express();
// Import api routes

/* GET home page. */
const index = router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

api.use('/', index);
/* API Router. */


module.exports = api;
