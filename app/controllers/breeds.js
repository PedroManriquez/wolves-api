const breed = require('../models').breed;

module.exports = {
  create(request, response) {
    return breed
      .create({
        name: request.body.name,
      })
      .then(data => response.status(201).send(data))
      .catch(error => response.status(400).send(error));
  },
  index(request, response) {
  	return breed
  		.all()
  		.then(data => response.status(200).send(data))
  		.catch(err => response.status(400).send(err));
  }
};
