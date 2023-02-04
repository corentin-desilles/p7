import logo from '../../assets/images/LOGO.png';
import style from './Header.module.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo Kasa" />
      <nav>
        <ul>
          <li className={`${style.linkAccueuil}`}>Accueil</li>
          <li className={`${style.linkPropos}`}>A Propos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
