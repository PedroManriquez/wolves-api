const express = require('express');
const router = express.Router();
const breed = require('../app/controllers/breeds');

/* GET users listing. */
router
	.post('/breeds', breed.create)
	.get('/breeds', breed.index)
	.get('/breeds/:id', breed.get)
	.delete('/breeds/:id', breed.destroy);

module.exports = router;
