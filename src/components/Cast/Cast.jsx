import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from '../Api/Api';
import { CastUl, CastLi } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCredits(movieId)
      .then(response => {
        setCast(response);
      })
      .catch(() => alert('OOOPPPS'));
  }, [movieId]);

  return (
    <>
      <CastUl>
        {cast.length > 0
          ? cast.map(({ id, name, character, profile_path }) => (
              <CastLi key={id}>
                {name}:<p>{character}</p>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg`
                  }
                  width="200"
                  alt={name}
                />
              </CastLi>
            ))
          : 'OOPP'}
      </CastUl>
    </>
  );
};

export default Cast;
