import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner.js';
import style from './AboutPage.module.scss';
import AboutPageBtn from './components/AboutPageBtn/AboutPageBtn';
import { about } from '../../data/about.js';

function AboutPage() {
  return (
    <div className={`${style.aboutPageLayout}`}>
      <Header />
      <Banner />
      {about.map(about => (
        <AboutPageBtn key={about.title} about={about} />
      ))}
    </div>
  );
}

export default AboutPage;
