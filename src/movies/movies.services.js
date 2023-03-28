const moviesControllers = require('./movies.controllers');

const getAllMovies = (req, res) => {
  moviesControllers.findAllMovie()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: 'Bad request', err})
    });
};

const getMoviesById = (req, res) => {
  const id = Number(req.params.id)
  moviesControllers.findMovieById(id)
  .then(data => {
    if(!data){
      return res.status(404).json({message: `Movie with id: ${id}, not found`})
    }
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(400).json({message: 'Bad request'}, err)
  })
};

const postAddMovie =(req, res) => {
  const movieObj = req.body
  moviesControllers.addMuvie(movieObj)
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    res.status(400).json({message: 'Bad request', err})
  })
};

module.exports = {
  getAllMovies,
  getMoviesById,
  postAddMovie
};