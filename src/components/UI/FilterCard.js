import parts from "../../img/car-parts-icon.png";
import car from "../../img/car-icon.png";
import motorbike from "../../img/motor-icon.png";
import truck from "../../img/truck-icon.png";
import tractor from "../../img/tractor-icon.png";
import excavator from "../../img/excavator-icon.png";
import boat from "../../img/boat-icon.png";
import bike from "../../img/bike-icon.png";
import { VehiclesCard, VehiclesHolder } from "../styles/FilterCard.styled";

import Car from "../FilterCardComponent/Car";
import Motorbike from "../FilterCardComponent/Motorbike";
import Trucks from "../FilterCardComponent/Trucks";
import Tractors from "../FilterCardComponent/Tractors";
import HeavyMachines from "../FilterCardComponent/HeavyMachines";
import Vessels from "../FilterCardComponent/Vessels";
import Bike from "../FilterCardComponent/Bike";

import { useState, useEffect } from "react";

const FilterCard = (props) => {
  const [index, setIndex] = useState(0);
  const [titleName, setTitleName] = useState("");
  const [partsClicked, setPartsClicked] = useState(false);
  const [vehicleCardClass, setVehicleCardClass] = useState(false);

  const whichTitle = (title) => {
    setTitleName(title);
  };

  useEffect(() => {
    props.clicked(partsClicked);
  }, [partsClicked]);

  useEffect(() => {
    setVehicleCardClass(props.showVehicles);
  }, [props.showVehicles]);

  useEffect(() => {
    setIndex(props.whichIconMobile);
  }, [props.whichIconMobile]);

  const components = [
    <Car titleName={whichTitle} />,
    <Motorbike titleName={whichTitle} />,
    <Trucks titleName={whichTitle} />,
    <Tractors titleName={whichTitle} />,
    <HeavyMachines titleName={whichTitle} />,
    <Vessels titleName={whichTitle} />,
    <Bike titleName={whichTitle} />,
  ];

  return (
    <VehiclesCard className="vehicles-card">
      <h1>{titleName}</h1>
      <VehiclesHolder>
        <div
          className={`vehicle-wrapper ${
            vehicleCardClass ? "visible" : "hidden"
          }`}
        >
          <div className="vehicles-icons">
            <div className="link-holder">
              <a onClick={() => setPartsClicked(true)} className="vehicle-icon">
                <img src={parts} alt="parts" />
              </a>
            </div>
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
                <img src={motorbike} alt="motorbike" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(2)}
                className={index === 2 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={truck} alt="truck" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(3)}
                className={index === 3 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={tractor} alt="tractor" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(4)}
                className={index === 4 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={excavator} alt="excavator" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(5)}
                className={index === 5 ? "vehicle-icon active" : "vehicle-icon"}
              >
                <img src={boat} alt="boat" />
              </a>
            </div>
            <div className="link-holder">
              <a
                onClick={() => setIndex(6)}
                className={index === 6 ? "vehicle-icon active" : "vehicle-icon"}
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

export default FilterCard;
