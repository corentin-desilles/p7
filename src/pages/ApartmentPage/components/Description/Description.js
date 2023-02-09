import style from './Description.module.scss';

import { useState } from 'react';

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

function Description({ targetedLogement: { description, equipments } }) {
  const [selectDescription, setSelectDescription] = useState(true);
  const [selectEquipments, setSelectEquipments] = useState(true);

  function handleClickDisplayDescription() {
    setSelectDescription(!selectDescription);
  }

  function handleClickDisplayEquipment() {
    setSelectEquipments(!selectEquipments);
  }

  return (
    <div className={`${style.wrapper}`}>
      <div className={`${style.accordion}`}>
        <div className={`${style.item}`}>
          <div
            onClick={handleClickDisplayDescription}
            className={`${style.title}`}
          >
            <h2>Description</h2>
            <span>
              {selectDescription === true ? (
                <i className={`fa-solid fa-angle-down fa-2xl `}></i>
              ) : (
                <i
                  className={`fa-solid fa-angle-down fa-2xl ${style.toggleArrow} `}
                ></i>
              )}
            </span>
          </div>
          <div
            className={
              selectDescription === true
                ? `${style.content} ${style.show}`
                : `${style.content}`
            }
          >
            {description}
          </div>
        </div>
        <div className={`${style.item}`}>
          <div
            onClick={handleClickDisplayEquipment}
            className={`${style.title}`}
          >
            <h2>Equipments</h2>
            <span>
              {selectEquipments === true ? (
                <i className={`fa-solid fa-angle-down fa-2xl `}></i>
              ) : (
                <i
                  className={`fa-solid fa-angle-down fa-2xl ${style.toggleArrow} `}
                ></i>
              )}
            </span>
          </div>
          <div
            className={
              selectEquipments === true
                ? `${style.content} ${style.show}`
                : `${style.content}`
            }
          >
            {equipments}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
