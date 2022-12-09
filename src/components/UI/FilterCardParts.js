import car from "../../img/car-icon.png";
import tire from "../../img/tire.png";
import rim from "../../img/rim.png";
import motorbike from "../../img/motor-icon.png";
import truck from "../../img/truck-icon.png";
import tractor from "../../img/tractor-icon.png";
import excavator from "../../img/excavator-icon.png";
import boat from "../../img/boat-icon.png";
import bike from "../../img/bike-icon.png";

import AutoParts from "../FilterCardComponent/PartsComponents/AutoParts";
import AutoEquipment from "../FilterCardComponent/PartsComponents/AutoEquipment";
import Tires from "../FilterCardComponent/PartsComponents/Tires";
import Rims from "../FilterCardComponent/PartsComponents/Rims";
import MotoParts from "../FilterCardComponent/PartsComponents/MotoParts";
import TruckParts from "../FilterCardComponent/PartsComponents/TruckParts";
import TractorParts from "../FilterCardComponent/PartsComponents/TractorParts";
import HeavyMachinesParts from "../FilterCardComponent/PartsComponents/HeavyMachinesParts";
import VesselsParts from "../FilterCardComponent/PartsComponents/VesselsParts";
import BikeParts from "../FilterCardComponent/PartsComponents/BikeParts";

import { VehiclesCard, VehiclesHolder } from "../styles/FilterCard.styled";
import { useState, useEffect } from "react";

const FilterCardParts = (props) => {
  const [index, setIndex] = useState(0);
  const [partsCardClass, setPartsCardClass] = useState(false);

  useEffect(() => {
    setPartsCardClass(props.showVehicles);
  }, [props.showVehicles]);

  const titles = [
    "Auto delovi",
    "Auto oprema i kozmetika",
    "Gume",
    "Felne i ratkapne",
    "Moto oprema i delovi",
    "Kombi delovi i oprema",
    "Delovi za traktore",
    "Delovi za bagere, viljuškare i radne mašine",
    "Oprema i delovi za čamce, brodove i ostala plovila",
    "Delovi i oprema za bicikle",
  ];

  const components = [
    <AutoParts />,
    <AutoEquipment />,
    <Tires />,
    <Rims />,
    <MotoParts />,
    <TruckParts />,
    <TractorParts />,
    <HeavyMachinesParts />,
    <VesselsParts />,
    <BikeParts />,
  ];

  return (
    <VehiclesCard>
      <h1>{titles[index]}</h1>
      <VehiclesHolder>
        <div
          className={`parts-wrapper ${partsCardClass ? "visible" : "hidden"}`}
        >
          <div className="vehicles-icons">
            <div className="link-holder">
              <a
                onClick={() => setIndex(0)}
                className={index === 0 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={car} alt="car" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(1)}
                className={index === 1 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={car} alt="car" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(2)}
                className={index === 2 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={tire} alt="tire icon" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(3)}
                className={index === 3 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={rim} alt="rim icon" />
              </a>
            </div>

            <div className="link-holder">
              <a
                onClick={() => setIndex(4)}
                className={index === 4 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={motorbike} alt="motorbike" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(5)}
                className={index === 5 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={truck} alt="truck" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(6)}
                className={index === 6 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={tractor} alt="tractor" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(7)}
                className={index === 7 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={excavator} alt="excavator" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(8)}
                className={index === 8 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={boat} alt="boat" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(9)}
                className={index === 9 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={bike} alt="bike" />
              </a>
            </div>
          </div>
          {components[index]}
        </div>
      </VehiclesHolder>
    </VehiclesCard>
  );
};

export default FilterCardParts;
