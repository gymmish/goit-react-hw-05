import { FcSearch } from 'react-icons/fc';
import { Form, InputForm, SearchBut } from './Search.styled';

const SearchFilms = ({ onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputForm
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={onChange}
      />
      <SearchBut type="submit">
        <span>
          <FcSearch></FcSearch>
        </span>
      </SearchBut>
    </Form>
  );
};

export default SearchFilms;
