import parts from "../../img/car-parts-icon.png";
import car from "../../img/car-icon.png";
import motorbike from "../../img/motor-icon.png";
import truck from "../../img/truck-icon.png";
import tractor from "../../img/tractor-icon.png";
import excavator from "../../img/excavator-icon.png";
import boat from "../../img/boat-icon.png";
import bike from "../../img/bike-icon.png";

import { useState, useEffect } from "react";

const VehicleListMobile = (props) => {
  const [index, setIndex] = useState(0);
  const clickHandler = function (event) {
    setIndex(event.currentTarget.getAttribute("data-id"));
    props.clicked();
  };

  useEffect(() => {
    props.iconID(index);
  }, [index]);

  const vehicles = [
    {
      id: 0,
      text: "Putnicka vozila",
      img: car,
    },
    {
      id: 1,
      text: "Motori",
      img: motorbike,
    },
    {
      id: 2,
      text: "Transportna vozila",
      img: truck,
    },
    {
      id: 3,
      text: "Poljoprivredne masine",
      img: tractor,
    },
    {
      id: 4,
      text: "Radne masine",
      img: excavator,
    },
    {
      id: 5,
      text: "Plovila",
      img: boat,
    },
    {
      id: 6,
      text: "Bicikli",
      img: bike,
    },
  ];

  return (
    <>
      {vehicles.map((vehicle) => (
        <a
          onClick={clickHandler}
          key={vehicle.id}
          data-id={vehicle.id}
          href="#"
          className={index == vehicle.id ? "active" : ""}
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
