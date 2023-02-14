import { useState } from 'react';
import style from './Accordion.module.scss';

function Accordion({ text, title }) {
  const bienUnTableau = Array.isArray(text);
  const [selected, setSelected] = useState(true);

  function handleClickDisplayText() {
    setSelected(!selected);
  }

  return (
    <div className={`${style.item}`}>
      <div className={`${style.title}`} onClick={handleClickDisplayText}>
        <h2>{title}</h2>
        <span>
          {selected === true ? (
            <i className={`fa-solid fa-angle-down fa-2xl ${style.arrow}`}></i>
          ) : (
            <i
              className={`fa-solid fa-angle-down fa-2xl ${style.toggleArrow} `}
            ></i>
          )}
        </span>
      </div>

      {bienUnTableau ? (
        text.map(equipement => (
          <div
            key={Math.random()}
            className={
              selected === true
                ? `${style.content} ${style.show}`
                : `${style.content}`
            }
          >
            {equipement}
          </div>
        ))
      ) : (
        <div
          className={
            selected === true
              ? `${style.content} ${style.show}`
              : `${style.content}`
          }
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Accordion;
