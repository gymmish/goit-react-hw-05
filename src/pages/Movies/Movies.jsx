import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from '../../components/Api/Api';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-hot-toast';
import FilmList from '../../components/FilmList/FilmList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryFilm = searchParams.get('query');

  const hendleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.value.toLowerCase();
    setSearchParams({ query: query });
  };

  useEffect(() => {
    !queryFilm ||
      getMovieSearch(queryFilm)
        .then(response => setMovies(response))
        .catch(() => toast.error("This didn't work"));
  }, [queryFilm]);

  return (
    <>
      <form onSubmit={hendleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          value={queryFilm}
        />
        <button type="submit">
          <span>
            <FcSearch></FcSearch>
          </span>
        </button>
      </form>
      <FilmList films={movies}></FilmList>
    </>
  );
};

export default Movies;
