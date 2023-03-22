import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLi = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: cornflowerblue;
  height: 60px;
`;

export const NavElement = styled(NavLink)`
  width: 100px;
  height: 30px;
  color: black;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  :hover {
    box-shadow: 0 8px 10px 2px rgb(0 0 0 / 25%);
  }
`;
