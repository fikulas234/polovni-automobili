import { CarsHolder } from "../styles/Car.styled";
import VehiclesInputs from "./VehiclesFirstInputs";
import Vehicle from "./Vehicle";

import { useEffect } from "react";

const HeavyMachines = (props) => {
  const title = "Radne mašine";
  useEffect(() => {
    props.titleName(title);
  }, []);
  return (
    <>
      <CarsHolder className="cars-holder">
        <VehiclesInputs fifthInput={"Tip"} sixthInput={"Gorivo"} />
        <Vehicle
          vehicleState={"Polovne i nove mašine"}
          vehicleLink={"Nove mašine"}
          garancija={"hidden"}
          input={"visible"}
          inputsHS={"hidden"}
          seventhInput={"Region"}
        />
      </CarsHolder>
    </>
  );
};

export default HeavyMachines;
