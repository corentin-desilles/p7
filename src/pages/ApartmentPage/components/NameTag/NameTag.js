import style from "./NameTag.module.scss";

function NameTag({ targetedLogement: { tags } }) {
  return (
    <div className={`${style.container}`}>
      {tags.map((t) => (
        <div key={t} className={`${style.tagStyle}`}>
          {t}
        </div>
      ))}
    </div>
  );
}
export default NameTag;
