// import { useState } from 'react';
// import Picture from './components/Picture';
// import style from './Pictures.module.scss';
// import { data } from '../../../../data/logements';
import style from './Gallery.module.scss';
import { useState } from 'react';

function Gallery({ targetedLogement: { pictures } }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  function handleClickPreviousPhoto() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setAnimate(true);
  }
  function handleClickNextPhoto() {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setAnimate(true);
  }

  const slideStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${pictures[currentIndex]})`,
  };

  return (
    <div className={`${style.sliderStyle}`}>
      <i
        onClick={handleClickPreviousPhoto}
        className={`fa-solid fa-angle-up ${style.arrowLeft}`}
      ></i>
      <i
        onClick={handleClickNextPhoto}
        className={`fa-solid fa-angle-up ${style.arrowRight} `}
      ></i>

      {animate === true ? (
        <div
          key={Math.random()}
          style={slideStyle}
          className={`${style.animate}`}
        ></div>
      ) : (
        <div key={Math.random()} style={slideStyle}></div>
      )}

      <div className={`${style.counterPosition}`}>
        <p>
          {currentIndex + 1}/{pictures.length}
        </p>
      </div>
    </div>
  );
}

export default Gallery;