import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from '../../components/Api/Api';
import SearchFilms from '../../components/Search/Search';

import FilmList from '../../components/FilmList/FilmList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    getMovieSearch(query).then(setMovies);
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchFilms onSubmit={handleSubmit} onChange={handleChange} />
      <FilmList films={movies}></FilmList>
    </>
  );
};

export default Movies;
