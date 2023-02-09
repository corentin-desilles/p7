import Pictures from "./components/Pictures/Pictures";
import NameTag from "./components/NameTag/NameTag";
import Title from "./components/Title/Title";
import Rate from "./components/Rate/Rate";
import Host from "./components/Host/Host";
// import Description from './components/Description/Description';
import { ApiContext } from "../../context/ApiContext";
import { useFetchData } from "../../hooks";
import { useParams } from "react-router";
import { useContext } from "react";
import style from "./ApartmentPage.module.scss";
import Description from "./components/Description/Description";

function ApartmentPage() {
  const BASE_URL_API = useContext(ApiContext);
  const [logements] = useFetchData(BASE_URL_API);
  const { apartId } = useParams();

  return (
    <>
      {logements
        .filter((l) => l._id === apartId)
        .map(
          (targetedLogement) => (
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
                  <NameTag
                    key={targetedLogement._id}
                    targetedLogement={targetedLogement}
                  />
                </div>
                <div className={`${style.rateContainer}`}>
                  <Rate targetedLogement={targetedLogement} />
                </div>
              </div>

              <div
                className={`${style.descriptionContainer} ${style.animate3}`}
              >
                <Description targetedLogement={targetedLogement} />
              </div>
            </div>
          )

          // <Description />
        )}
    </>
  );
}

export default ApartmentPage;
