const router = require('express').Router();
const movieServices = require('./movies.services');

router.get('/movies', movieServices.getAllMovies);
router.post('/movies', movieServices.postAddMovie);
router.get('/movies/:id', movieServices.getMoviesById);

module.exports = router;
