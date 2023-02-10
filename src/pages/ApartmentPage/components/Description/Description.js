import Accordion from '../../../../components/Accordion/Accordion';

// function Description({ targetedLogement: { description, equipments } }) {
//   const [displayDescription, setDisplayDescription] = useState(true);
//   const [displayEquipments, setDisplayEquipments] = useState(true);

//   function handleClickDisplayDescription() {
//     setDisplayDescription(!displayDescription);
//   }

//   function handleClickDisplayEquipments() {
//     setDisplayEquipments(!displayEquipments);
//   }

//   return (
//     <div className={`${style.container}`}>
//       <div className={`${style.btnContainer}`}>
//         <button
//           onClick={handleClickDisplayDescription}
//           className={`${style.buttonStyle}`}
//         >
//           <p>description</p>
//           <span>
//             <i
//               className={`fa-solid fa-angle-down fa-2xl ${
//                 displayDescription ? style.toggleArrow : ''
//               }`}
//             ></i>
//           </span>
//         </button>
//         {displayDescription ? (
//           <div className={`${style.textLayout}`}>{description}</div>
//         ) : (
//           ''
//         )}
//       </div>
//       <div className={`${style.btnContainer}`}>
//         <button
//           onClick={handleClickDisplayEquipments}
//           className={`${style.buttonStyle}`}
//         >
//           <p>equipements</p>
//           <span>
//             <i
//               className={`fa-solid fa-angle-down fa-2xl ${
//                 displayEquipments ? style.toggleArrow : ''
//               }`}
//             ></i>
//           </span>
//         </button>
//         {displayEquipments ? (
//           <div className={`${style.textLayout}`}>
//             {equipments.map(e => (
//               <div>{e}</div>
//             ))}
//           </div>
//         ) : (
//           ''
//         )}
//       </div>
//     </div>
//   );
// }

function Description({ text, title, i, toggle, selected }) {
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

export default Description;
