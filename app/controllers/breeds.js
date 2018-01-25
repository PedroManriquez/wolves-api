const breed = require('../models').breed;

class BreedController {
  save (request, response) {
    return breed
      .create({
        name: request.body.name,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then(data => response.status(201).send(data))
      .catch(error => response.status(400).send(error));
  }
  query (request, response) {
    return breed
      .all()
      .then(data => response.status(200)
        .send(data.map(d => {
          return {id: d.id, name: d.name};
        })))
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
  update (request, response) {
    return breed
      .findById(request.params.id)
      .then(data => {
        if (!data) {
          return response.status(404).send({
            message: 'Breed Not Found'
          });
        }
        return data.update({
            name: request.body.name || data.name,
            updatedAt: new Date()
          })
          .then(() => response.status(204).send(data))
          .catch(err => response.status(400).send(err));
      })
      .catch(err => response.status(400).send(err));
  }
  destroy (request, response) {
    return breed
      .findById(request.params.id)
      .then(data => {
        if (!data) {
          return response.status(404).send({
            message: 'Breed Not Found'
          });
        }
        return data.destroy()
          .then(() => response.status(204).send())
          .catch(err => response.status(400).send(err));
      })
      .catch(err => response.status(400).send(err));
  }
}

module.exports = new BreedController(); 
