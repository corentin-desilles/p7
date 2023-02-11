import { Link } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png';
import style from './Header.module.scss';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li className={`${style.link}`}>Accueil</li>
          </Link>

          <Link to="/about">
            <li className={`${style.link}`}>A Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
