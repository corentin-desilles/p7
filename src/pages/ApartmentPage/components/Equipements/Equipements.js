import Accordion from '../../../../components/Accordion/Accordion';

function Equipements({ text, title, i, toggle, selected }) {
  return (
    <Accordion
      text={text}
      title={title}
      i={i}
      toggle={toggle}
      selected={selected}
    />
  );
}

export default Equipements;
