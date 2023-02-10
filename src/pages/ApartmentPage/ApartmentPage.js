import Pictures from './components/Pictures/Pictures';
import NameTag from './components/NameTag/NameTag';
import Title from './components/Title/Title';
import Rate from './components/Rate/Rate';
import Host from './components/Host/Host';
// import Description from './components/Description/Description';
import { ApiContext } from '../../context/ApiContext';
import { useFetchData } from '../../hooks';
import { useParams } from 'react-router';
import { useContext, useState } from 'react';
import style from './ApartmentPage.module.scss';
import Description from './components/Description/Description';
import Equipements from './components/Equipements/Equipements';

function ApartmentPage() {
  const BASE_URL_API = useContext(ApiContext);
  const [logements] = useFetchData(BASE_URL_API);
  const { apartId } = useParams();

  const [selected, setSelected] = useState(null);

  const toggleD = i => {
    //ferme les autres elem si j'en ouvre un autre
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const toggleE = i => {
    //ferme les autres elem si j'en ouvre un autre
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      {logements
        .filter(l => l._id === apartId)
        .map(
          targetedLogement => (
            <div key={targetedLogement._id} className={`${style.container}`}>
              <div
                className={`${style.carousselContainer} ${style.animate1} mb-30`}
              >
                <Pictures targetedLogement={targetedLogement} />
              </div>
              <div className={`${style.layoutContainer} ${style.animate2}`}>
                <div className={`${style.titleContainer} mb-20`}>
                  <Title targetedLogement={targetedLogement} />
                </div>
                <div className={`${style.hostContainer}`}>
                  <Host targetedLogement={targetedLogement} />
                </div>
              </div>
              <div className={`${style.layoutContainer} ${style.animate2}`}>
                <div className={`${style.nameTagContainer}`}>
                  {targetedLogement.tags.map(tag => (
                    <NameTag key={Math.random()} tag={tag} />
                  ))}
                </div>
                <div className={`${style.rateContainer}`}>
                  <Rate targetedLogement={targetedLogement} />
                </div>
              </div>

              <div
                className={`${style.descriptionContainer} ${style.animate3}`}
              >
                <div className={`${style.accordion}`}>
                  <Description
                    key={targetedLogement.description}
                    text={targetedLogement.description}
                    title={'Description'}
                    toggle={toggleD}
                    selected={selected}
                  />
                </div>

                <div className={`${style.accordion}`}>
                  <Equipements
                    key={Math.random()}
                    text={targetedLogement.equipments}
                    title={'Equipements'}
                    toggle={toggleE}
                    selected={selected}
                  />
                </div>
              </div>
            </div>
          )

          // <Description />
        )}
    </>
  );
}

export default ApartmentPage;
