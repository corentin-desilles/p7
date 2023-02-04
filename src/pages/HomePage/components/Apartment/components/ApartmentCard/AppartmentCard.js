import style from './AppartmentCard.module.scss';

function AppartmentCard({ apartment }) {
  return (
    <>
      <div className={`${style.apartementCard}`}>
        <div className={`${style.imageContainer}`}>
          <img src={apartment.cover} alt="appartement" />
        </div>
        <p className={`${style.cardTitle}`}>{apartment.title}</p>
      </div>
    </>
  );
}

export default AppartmentCard;
