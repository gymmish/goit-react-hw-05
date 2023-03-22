import { useLocation } from 'react-router-dom';
import { ListMovie, Li, Links } from './FilmList.styled';

const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      <ListMovie>
        {films.map(element => {
          return (
            <Li key={element.id}>
              <Links to={`/movies/${element.id}`} state={{ from: location }}>
                {element.title}
              </Links>
            </Li>
          );
        })}
      </ListMovie>
    </>
  );
};

export default FilmList;
