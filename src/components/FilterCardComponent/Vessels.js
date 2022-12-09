import { CarsHolder } from "../styles/Car.styled";
import VehiclesInputs from "./VehiclesFirstInputs";
import VehicleMoreInputs from "./VehicleSecondInputs";

import { useEffect } from "react";

const Vessels = (props) => {
  const title = "Plovila";
  useEffect(() => {
    props.titleName(title);
  }, []);

  return (
    <>
      <CarsHolder>
        <VehiclesInputs fifthInput={"Tip"} sixthInput={"Region"} />
        <VehicleMoreInputs
          vehicleState={"Polovna i nova plovila"}
          vehicleType={"Nova plovila"}
        />
      </CarsHolder>
    </>
  );
};

export default Vessels;
