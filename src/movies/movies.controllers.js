const movieDb = [
  {
    id :1,
    title: "Pacific Rim",
    description: "Lorem Ipsum",
    year: 2012,
    director: "Guillermo del Toro"
  },
  {
    id: 2,
    title: "Inception",
    description: "Lorem Ipsum",
    year: 2010,
    director: "Christopher Nolan"
    },
    {
    id: 3,
    title: "The Matrix",
    description: "Lorem Ipsum",
    year: 1999,
    director: "Lana Wachowski, Lilly Wachowski"
    }
];

let movieId = 1;

const findAllMovie = async () => {
  return movieDb;
};

const findMovieById = async (id) => {
  const data = movieDb.find(movie => movie.id === id);
  return data;
};

const addMuvie = async (movieObj) => {
  const newMuvie = {
      id: movieId++,
      title: movieObj.title || null,
      description: movieObj.description || null,
      year: movieObj.year || null,
      director: movieObj.director || 'Anonymous'
  }
  movieDb.push(newMuvie)
  return newMuvie
};

module.exports = {
  findAllMovie,
  findMovieById,
  addMuvie
};
