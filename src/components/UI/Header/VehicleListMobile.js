import car from "../../../img/car-icon.png";
import motorbike from "../../../img/motor-icon.png";
import truck from "../../../img/truck-icon.png";
import tractor from "../../../img/tractor-icon.png";
import excavator from "../../../img/excavator-icon.png";
import boat from "../../../img/boat-icon.png";
import bike from "../../../img/bike-icon.png";

import { useState, useEffect } from "react";

const VehicleListMobile = (props) => {
  const [index, setIndex] = useState(0);
  const clickHandler = function (event) {
    setIndex(+event.currentTarget.getAttribute("data-id"));
    props.clicked();
  };

  useEffect(() => {
    props.iconID(index);
  }, [index]);

  const vehicles = [
    {
      text: "Putnicka vozila",
      img: car,
    },
    {
      text: "Motori",
      img: motorbike,
    },
    {
      text: "Transportna vozila",
      img: truck,
    },
    {
      text: "Poljoprivredne masine",
      img: tractor,
    },
    {
      text: "Radne masine",
      img: excavator,
    },
    {
      text: "Plovila",
      img: boat,
    },
    {
      text: "Bicikli",
      img: bike,
    },
  ];

  return (
    <>
      {vehicles.map((vehicle, indexID) => (
        <a
          onClick={clickHandler}
          key={indexID}
          data-id={indexID}
          href="#"
          className={index === indexID ? "active" : ""}
        >
          <div>
            <img src={vehicle.img} />
          </div>
          <span>{vehicle.text}</span>
        </a>
      ))}
    </>
  );
};

export default VehicleListMobile;
