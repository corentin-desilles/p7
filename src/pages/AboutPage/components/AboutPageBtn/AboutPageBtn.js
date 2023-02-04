import { useState } from 'react';
import style from './AboutPageBtn.module.scss';

function AboutPageBtn({ about }) {
  const [displayText, setDisplayText] = useState(false);

  function handleClickDisplayText() {
    setDisplayText(!displayText);
  }

  return (
    <div className={`${style.btnContainer}`}>
      <button
        onClick={handleClickDisplayText}
        className={`${style.aboutButton}`}
      >
        <p>{about.title}</p>
        <span>
          <i
            className={`fa-solid fa-angle-down fa-2xl ${
              displayText ? style.toggleArrow : ''
            }`}
          ></i>
        </span>
      </button>
      {displayText ? <p className={`${style.textLayout}`}>{about.text}</p> : ''}
    </div>
  );
}
export default AboutPageBtn;
