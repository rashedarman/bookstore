import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
  <nav>
    <a href="/">Bookstore CMS</a>
    <ul>
      <li>
        <Link aria-current="page" to="/" className="active">
          BOOKS
        </Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <button type="button" className="icon-button">
      <i className="material-icons">person</i>
    </button>
  </nav>
);

export default Nav;
