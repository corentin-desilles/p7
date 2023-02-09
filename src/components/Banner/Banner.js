import style from "./Banner.module.scss";
import BannerText from "./components/BannerText";

function Banner({ banner, displayText }) {
  return (
    <section className={`${style.bannerLayout}`}>
      {displayText && <BannerText />}
      <img
        src={banner}
        className={`${style.bannerImageLayout}`}
        alt="paysage montagneux au bord de la mer"
      />
    </section>
  );
}

export default Banner;
