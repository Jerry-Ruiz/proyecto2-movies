const express = require('express');
//const cors = require('cors');

const moviesRouter = require('./movies/movies.router');
const app = express();

app.use(express.json());
//app.use(cors());

app.get('/', (req, res) => {
  res.json({message: 'Server OK'})
});

app.use('/', moviesRouter)

app.listen(3000, () => {
  console.log('Server started at port 3000')
});

module.exports = app
