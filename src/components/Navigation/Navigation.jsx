import { NavigationLi, NavElement } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationLi>
      <NavElement to="/">Home</NavElement>
      <NavElement to="/movies">Movies</NavElement>
    </NavigationLi>
  );
};
export default Navigation;
