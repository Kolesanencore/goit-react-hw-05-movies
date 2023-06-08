import { Link } from 'react-router-dom';

import css from './Header.module.css';

function Header() {
  return (
    <nav className="header-nav">
      <ul className={css.home}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
