import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h1>Bookstore</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;