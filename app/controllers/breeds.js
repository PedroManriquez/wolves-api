const breed = require('../models').breed;

class BreedController {
  create (request, response) {
    return breed
      .create({
        name: request.body.name,
      })
      .then(data => response.status(201).send(data))
      .catch(error => response.status(400).send(error));
  }
  index (request, response) {
    return breed
      .all()
      .then(data => response.status(200).send(data))
      .catch(err => response.status(400).send(err));
  }
  get (request, response) {
    return breed
      .findById(request.params.id)
      .then(data => {
        if (!data) {
          return response.status(404).send({
            message: 'Breed Not Found'
          });
        }
        return response.status(200).send(data)})
      .catch(err => response.status(400).send(err));
  }
}

module.exports = new BreedController(); 
