import Header from './components/Header/Header';
import style from './App.module.scss';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import Footer from './components/Footer/Footer';

// import { seedLogements } from './data/seed';

// seedLogements();

function App() {
  return (
    <>
      <div className={`${style.layout}`}>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <div className={`${style.footerContainer}`}>
        <Footer />
      </div>
    </>
  );
}

export default App;
