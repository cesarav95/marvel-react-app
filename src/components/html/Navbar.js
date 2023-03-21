import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

import logo from '../../images/marvel-logo.png';

function Navbar() {
  return (
    <div className="navbar navbar-custom">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Marvel App" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
