import Header from './components/Header/Header';
import style from './pages/HomePage/HomePage.module.scss';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className={`${style.homepageLayout}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
