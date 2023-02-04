import style from './Apartment.module.scss';

function Apartment() {
  return (
    <section className={`${style.apartmentsLayout}`}>
      <div className={`${style.apartementCard}`}>
        <p className={`${style.cardTitle}`}>title</p>
      </div>
      <div className={`${style.apartementCard}`}>
        <p className={`${style.cardTitle}`}>title</p>
      </div>
      <div className={`${style.apartementCard}`}>
        <p className={`${style.cardTitle}`}>title</p>
      </div>
      <div className={`${style.apartementCard}`}>
        <p className={`${style.cardTitle}`}>title</p>
      </div>
      <div className={`${style.apartementCard}`}>
        <p className={`${style.cardTitle}`}>title</p>
      </div>
      <div className={`${style.apartementCard}`}>
        <p className={`${style.cardTitle}`}>title</p>
      </div>
    </section>
  );
}

export default Apartment;
