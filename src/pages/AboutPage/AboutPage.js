import Banner from '../../components/Banner/Banner.js';
import AboutPageBtn from './components/AboutPageBtn/AboutPageBtn';
import { about } from '../../data/about.js';

function AboutPage() {
  return (
    <>
      <Banner />
      {about.map(about => (
        <AboutPageBtn key={about.title} about={about} />
      ))}
    </>
  );
}

export default AboutPage;
