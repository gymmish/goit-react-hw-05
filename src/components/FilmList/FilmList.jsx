import { Link } from 'react-router-dom';

const FilmList = ({ films }) => {
  return (
    <>
      <ul>
        {films.map(element => {
          return (
            <li key={element.id}>
              <Link to={`/movies/${element.id}`}>{element.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilmList;
