import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'components/Api/Api';
import {
  ButtonBack,
  MovieCard,
  AboutMivie,
  GenersList,
  CastReview,
} from './MovieDet.styled';
import { AiFillBackward } from 'react-icons/ai';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId)
      .then(response => {
        setMovie(response);
      })
      .catch(() => alert('OOOPPPS'));
  }, [movieId]);

  const { title, overview, poster_path, genres } = movie;

  return (
    <>
      <ButtonBack to={backLinkHref}>
        <AiFillBackward></AiFillBackward>Go back
      </ButtonBack>
      <MovieCard>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg`
          }
          alt=""
        />
        <AboutMivie>
          <h2>{title}</h2>
          <div>{overview}</div>

          <h2>Genres:</h2>
          <GenersList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenersList>
        </AboutMivie>
      </MovieCard>

      <CastReview to="cast">Cast</CastReview>

      <CastReview to="reviews">Reviews</CastReview>

      <Outlet />
    </>
  );
};

export default MovieDetails;
