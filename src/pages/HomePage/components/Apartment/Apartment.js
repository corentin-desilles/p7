import style from './Apartment.module.scss';
import AppartmentCard from './components/ApartmentCard/AppartmentCard';
import { data } from '../../../../data/logements';

function Apartment() {
  return (
    <section className={`${style.apartmentsLayout} ${style.grid}`}>
      {data.map(data => (
        <AppartmentCard key={data.id} apartment={data} />
      ))}
    </section>
  );
}

export default Apartment;
