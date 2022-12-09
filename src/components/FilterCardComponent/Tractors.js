import traktor from "../../img/tractor-icons/traktor.PNG";
import kombajn from "../../img/tractor-icons/kombajn.PNG";
import prikMasine from "../../img/tractor-icons/prikljucne-masine.PNG";
import prikolice from "../../img/tractor-icons/prikolice.PNG";
import alati from "../../img/tractor-icons/alati.PNG";

import { CarsHolder } from "../styles/Car.styled";
import { VehicleIcons } from "../styles/Trucks.styled";

import { useState } from "react";
import Tractor from "./TractorSubComponents/Tractor";
import Harvester from "./TractorSubComponents/Harvester";
import ConnectingMachine from "./TractorSubComponents/ConnectingMachine";
import TractorTrailer from "./TractorSubComponents/TractorTrailer";
import MachinesAndTools from "./TractorSubComponents/MachinesAndTools";

import { useEffect } from "react";

const Tractors = (props) => {
  const [index, setIndex] = useState(0);

  const tractorTitles = [
    "Traktori",
    "Kombajni",
    "Priključne mašine",
    "Prikolice",
    "Mašine i alati",
  ];

  useEffect(() => {
    props.titleName(tractorTitles[index]);
  }, [tractorTitles]);

  const components = [
    <Tractor />,
    <Harvester />,
    <ConnectingMachine />,
    <TractorTrailer />,
    <MachinesAndTools />,
  ];
  return (
    <CarsHolder>
      <VehicleIcons>
        <a
          onClick={() => setIndex(0)}
          className={index === 0 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={traktor} />
        </a>
        <a
          onClick={() => setIndex(1)}
          className={index === 1 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={kombajn} />
        </a>
        <a
          onClick={() => setIndex(2)}
          className={index === 2 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={prikMasine} />
        </a>
        <a
          onClick={() => setIndex(3)}
          className={index === 3 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={prikolice} />
        </a>
        <a
          onClick={() => setIndex(4)}
          className={index === 4 ? "vehicle-icon active" : "vehicle-icon"}
        >
          <img src={alati} />
        </a>
      </VehicleIcons>
      {components[index]}
    </CarsHolder>
  );
};

export default Tractors;
