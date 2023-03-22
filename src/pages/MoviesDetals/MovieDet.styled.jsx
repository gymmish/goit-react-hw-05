import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ButtonBack = styled(Link)`
  width: 100px;
  height: 30px;
  color: #ffffff;
  background-color: cornflowerblue;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  :hover {
    box-shadow: 0 8px 10px 2px rgb(0 0 0 / 25%);
  }
`;

export const MovieCard = styled.div`
  display: flex;
  margin-left: 15px;
`;

export const AboutMivie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const GenersList = styled.ul`
  display: block;
`;

export const CastReview = styled(Link)`
  width: 100px;
  height: 30px;
  color: #ffffff;
  display: inline-flex;
  background-color: cornflowerblue;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 15px;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  :hover {
    box-shadow: 0 8px 10px 2px rgb(0 0 0 / 25%);
  }
`;
