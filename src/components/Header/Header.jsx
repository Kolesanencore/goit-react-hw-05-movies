import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  NavWrap,
  Link,
  NavItem,
  NavList,
} from 'components/Header/Header.styled';

function Header() {
  const location = useLocation();

  return (
    <NavWrap>
      <NavList>
        <NavItem>
          <Link
            as={RouterLink}
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </NavItem>

        <NavItem>
          <Link
            as={RouterLink}
            to="/movies"
            className={location.pathname === '/movies' ? 'active' : ''}
          >
            Movies
          </Link>
        </NavItem>
      </NavList>
    </NavWrap>
  );
}

export default Header;
