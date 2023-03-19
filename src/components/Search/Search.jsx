import { FcSearch } from 'react-icons/fc';

const SearchFilms = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={onChange}
      />
      <button type="submit">
        <span>
          <FcSearch></FcSearch>
        </span>
      </button>
    </form>
  );
};

export default SearchFilms;
