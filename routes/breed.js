const express = require('express');
const router = express.Router();
const breed = require('../app/controllers/breeds');

/* GET users listing. */
router
	.post('/breeds', breed.save)
	.get('/breeds', breed.query)
	.get('/breeds/:id', breed.get)
	.put('/breeds/:id', breed.update)
	.delete('/breeds/:id', breed.destroy);

module.exports = router;
