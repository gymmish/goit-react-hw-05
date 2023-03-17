import { useEffect, useState } from 'react';
import { trendingMovies } from 'components/Api/Api';
import FilmList from 'components/FilmList/FilmList';
const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    trendingMovies()
      .then(response => setFilms(response))
      .catch(() => alert('OOOPPPS'));
  }, []);

  return <FilmList films={films}></FilmList>;
};
export default Home;
