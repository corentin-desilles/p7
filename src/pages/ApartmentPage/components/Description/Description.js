import Collapse from '../../../../components/Collapse/Collapse';

function Description({ text, title, i, toggle, selected }) {
  return (
    <Collapse
      text={text}
      title={title}
      i={i}
      toggle={toggle}
      selected={selected}
    />
  );
}

export default Description;
