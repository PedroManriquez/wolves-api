const express = require('express');
const router = express.Router();
const BreedController = require('../app/controllers/breeds');

let breed = new BreedController();

/* GET users listing. */
router
	.post('/breeds', breed.save)
	.get('/breeds', breed.query)
	.get('/breeds/:id', breed.get)
	.put('/breeds/:id', breed.update)
	.delete('/breeds/:id', breed.destroy);

module.exports = router;
