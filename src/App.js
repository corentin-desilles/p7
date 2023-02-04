import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import style from './pages/HomePage/HomePage.module.scss';
// import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={`${style.homepageLayout}`}>
      <Header />
      <HomePage />
      {/* <AboutPage /> */}
      <Footer />
    </div>
  );
}

export default App;
