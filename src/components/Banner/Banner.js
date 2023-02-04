import style from './Banner.module.scss';
import bannerImage from '../../assets/images/banniere.png';

function Banner() {
  return (
    <section className={`${style.bannerLayout}`}>
      <p className={`${style.bannerText}`}>Chez vous, partout et ailleurs</p>
      <img
        src={bannerImage}
        className={`${style.bannerImageLayout}`}
        alt="paysage montagneux au bord de la mer"
      />
    </section>
  );
}

export default Banner;
