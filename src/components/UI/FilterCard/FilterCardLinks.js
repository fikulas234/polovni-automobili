import car from "../../../img/car-icon.png";
import motorbike from "../../../img/motor-icon.png";
import truck from "../../../img/truck-icon.png";
import tractor from "../../../img/tractor-icon.png";
import excavator from "../../../img/excavator-icon.png";
import boat from "../../../img/boat-icon.png";
import bike from "../../../img/bike-icon.png";

import { useState, useEffect } from "react";

const FilterCardLinks = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    props.componentID(index);
  }, [index]);

  const clickHandler = function (event) {
    setIndex(+event.currentTarget.getAttribute("data-id"));
  };

  const icons = [
    {
      img: car,
      alt: "car-icon",
    },
    {
      img: motorbike,
      alt: "motorbike-icon",
    },
    {
      img: truck,
      alt: "truck-icon",
    },
    {
      img: tractor,
      alt: "tractor-icon",
    },
    {
      img: excavator,
      alt: "excavator-icon",
    },
    {
      img: boat,
      alt: "boat-icon",
    },
    {
      img: bike,
      alt: "bike-icon",
    },
  ];

  return (
    <>
      {icons.map((icon, indexID) => (
        <div className="link-holder" key={indexID}>
          <a
            onClick={clickHandler}
            data-id={indexID}
            href="#"
            className={
              index === indexID ? "vehicle-icon active" : "vehicle-icon"
            }
          >
            <img src={icon.img} alt={icon.alt} />
          </a>
        </div>
      ))}
    </>
  );
};

export default FilterCardLinks;
