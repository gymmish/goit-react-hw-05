import axios from 'axios';

const KEY = 'b30254b2dbf2d15ba793a5b6ad463809';

export async function trendingMovies() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
    .then(result => result.data.results);
}

export async function getMovieSearch(moviesName) {
  return await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${moviesName}&page=1&include_adult=false`
    )
    .then(result => result.data.results);
}

export async function getMovieById(moviesId) {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/${moviesId}?api_key=${KEY}&language=en-US&page=1&include_adult=false`
    )
    .then(result => result.data.results);
}
