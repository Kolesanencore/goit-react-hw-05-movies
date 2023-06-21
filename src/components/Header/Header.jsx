import {
  NavWrap,
  StyledLink,
  NavItem,
  NavList,
} from 'components/Header/Header.styled';

function Header() {
  return (
    <NavWrap>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavItem>
      </NavList>
    </NavWrap>
  );
}

export default Header;
