import parts from "../../../img/car-parts-icon.png";
import { VehiclesCard, VehiclesHolder } from "../../styles/FilterCard.styled";

import Car from "../../FilterCardComponent/Car";
import Motorbike from "../../FilterCardComponent/Motorbike";
import Trucks from "../../FilterCardComponent/Trucks";
import Tractors from "../../FilterCardComponent/Tractors";
import HeavyMachines from "../../FilterCardComponent/HeavyMachines";
import Vessels from "../../FilterCardComponent/Vessels";
import Bike from "../../FilterCardComponent/Bike";

import FilterCardLinks from "./FilterCardLinks";

import { useState, useEffect } from "react";

const FilterCard = (props) => {
  const [index, setIndex] = useState(0);
  const [titleName, setTitleName] = useState("");
  const [partsClicked, setPartsClicked] = useState(false);
  const [vehicleCardClass, setVehicleCardClass] = useState(false);

  const whichTitle = (title) => {
    setTitleName(title);
  };

  const whichComponent = (id) => {
    setIndex(id);
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
            <FilterCardLinks componentID={whichComponent} />
          </div>
          {components[index]}
        </div>
      </VehiclesHolder>
    </VehiclesCard>
  );
};

export default FilterCard;
