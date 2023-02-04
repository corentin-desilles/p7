import { Link } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png';
import style from './Header.module.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo Kasa" />
      <nav>
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li className={`${style.linkAccueuil}`}>Accueil</li>
          </Link>

          <Link to="/about" style={{ textDecoration: 'none' }}>
            <li className={`${style.linkPropos}`}>A Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
