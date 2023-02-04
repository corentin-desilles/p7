import Header from '../../components/Header/Header';
import Apartment from './components/Apartment/Apartment';
import Banner from './components/Banner/Banner';
import style from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={`${style.homepageLayout} flex-fill`}>
      <Header />
      <Banner />
      <Apartment />
    </div>
  );
}

export default HomePage;
