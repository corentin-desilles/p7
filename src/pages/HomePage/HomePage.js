import Header from '../../components/Header/Header';
import Banner from './components/Banner/Banner';
import Apartment from './components/Apartment/Apartment';
import Footer from '../../components/Footer/Footer';
import style from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={`${style.homepageLayout}`}>
      <Header />
      <Banner />
      <Apartment />
      <Footer />
    </div>
  );
}

export default HomePage;
