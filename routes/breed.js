const express = require('express');
const router = express.Router();
const breed = require('../app/controllers/breeds');
const cors = require('cors');

/* GET users listing. */
router
	.post('/breeds', cors(), breed.save)
	.get('/breeds', cors(), breed.query)
	.get('/breeds/:id', cors(), breed.get)
	.put('/breeds/:id', cors(), breed.update)
	.delete('/breeds/:id', cors(), breed.destroy);

module.exports = router;
