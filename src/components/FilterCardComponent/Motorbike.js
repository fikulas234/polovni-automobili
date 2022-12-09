import { CarsHolder } from "../styles/Car.styled";
import { FifthRow } from "../styles/Motorbike.styled";

import SavedSearchBtn from "./SavedSearchBtn";

import VehiclesInputs from "./VehiclesFirstInputs";
import VehicleMoreInputs from "./VehicleSecondInputs";

import { useEffect } from "react";

const Motorbike = (props) => {
  const title = "Motori";
  useEffect(() => {
    props.titleName(title);
  }, []);
  return (
    <CarsHolder>
      <VehiclesInputs fifthInput={"Tip"} sixthInput={"Region"} />
      <VehicleMoreInputs
        vehicleState={"Region"}
        vehicleType={"Nove masine i alati"}
      />
      <FifthRow className="row">
        <div className="save-your-search">
          <p>Sačuvaj pretragu i ubrzaj proces kupovine </p>
        </div>
        <div className="saved-searches">
          <SavedSearchBtn />
        </div>
      </FifthRow>
    </CarsHolder>
  );
};

export default Motorbike;
