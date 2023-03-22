import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListMovie = styled.ul`
  font-size: 1rem;
  list-style-type: none;
  text-align: start;
  padding: 12px 18px;
  margin: 0 auto;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  font-size: large;
  color: black;
  margin-top: 10px;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: cornflowerblue;
  }
`;
