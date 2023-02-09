import style from "./AboutPageBtn.module.scss";

function AboutPageBtn({ about, i, toggle, selected }) {
  return (
    <div className={`${style.item}`}>
      <div className={`${style.title}`} onClick={() => toggle(i)}>
        <h2>{about.title}</h2>
        <span>
          {selected === i ? (
            <i className={`fa-solid fa-angle-down fa-2xl `}></i>
          ) : (
            <i
              className={`fa-solid fa-angle-down fa-2xl ${style.toggleArrow} `}
            ></i>
          )}
        </span>
      </div>
      <div className={`${style.contentContainer}`}>
        <div
          className={
            selected === i
              ? `${style.content} ${style.show}`
              : `${style.content}`
          }
        >
          {about.text}
        </div>
      </div>
    </div>
  );
}
export default AboutPageBtn;
