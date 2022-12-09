import kombi from "../../img/truck-icons/kombi.PNG";
import lakiKamion from "../../img/truck-icons/kamioni-do-7-5.PNG";
import teskiKamion from "../../img/truck-icons/kamioni-preko-7-5.PNG";
import prikolica from "../../img/truck-icons/prikolice.PNG";
import autobus from "../../img/truck-icons/autobusi.PNG";
import kamper from "../../img/truck-icons/kamperi.PNG";

import { CarsHolder } from "../styles/Car.styled";
import { VehicleIcons } from "../styles/Trucks.styled";

import { useState } from "react";
import Van from "./TruckSubComponents/Van";
import LightTruck from "./TruckSubComponents/LightTruck";
import HeavyTruck from "./TruckSubComponents/HeavyTruck";
import Trailer from "./TruckSubComponents/Trailer";
import Bus from "./TruckSubComponents/Bus";
import Camper from "./TruckSubComponents/Camper";

import { useEffect } from "react";

const Trucks = (props) => {
  const [index, setIndex] = useState(0);

  const truckTitles = [
    "Kombi i laka dostavna vozila",
    "Kamioni do 7.5 tona",
    "Kamioni preko 7.5 tona",
    "Prikolice i poluprikolice",
    "Autobusi",
    "Kamperi",
  ];

  useEffect(() => {
    props.titleName(truckTitles[index]);
  }, [truckTitles]);

  const components = [
    <Van />,
    <LightTruck />,
    <HeavyTruck />,
    <Trailer />,
    <Bus />,
    <Camper />,
  ];

  return (
    <CarsHolder>
      <VehicleIcons>
        <a
          onClick={() => setIndex(0)}
          className={index === 0 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={kombi} />
        </a>
        <a
          onClick={() => setIndex(1)}
          className={index === 1 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={lakiKamion} />
        </a>
        <a
          onClick={() => setIndex(2)}
          className={index === 2 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={teskiKamion} />
        </a>
        <a
          onClick={() => setIndex(3)}
          className={index === 3 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={prikolica} />
        </a>
        <a
          onClick={() => setIndex(4)}
          className={index === 4 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={autobus} />
        </a>
        <a
          onClick={() => setIndex(5)}
          className={index === 5 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={kamper} />
        </a>
      </VehicleIcons>
      {components[index]}
    </CarsHolder>
  );
};

export default Trucks;
