import { CarsHolder } from "../styles/Car.styled";
import SavedSearchBtn from "./SavedSearchBtn";

import Vehicle from "./Vehicle";
import VehiclesInputs from "./VehiclesFirstInputs";

import { useEffect } from "react";

const Car = (props) => {
  const title = "Automobili";
  useEffect(() => {
    props.titleName(title);
  }, []);

  return (
    <CarsHolder className="cars-holder">
      <VehiclesInputs fifthInput={"Karoserija"} sixthInput={"Gorivo"} />
      <Vehicle
        vehicleState={"Polovna i nova vozila"}
        garancija={"visible"}
        input={"visible"}
        inputsHS={"hidden"}
        seventhInput={"Region"}
      />
      <div className="fifth-row row">
        <div className="new-cars">
          <a href="#">Novi automobili</a>
        </div>
        <div className="save-your-search">
          <p>Sačuvaj pretragu i ubrzaj proces kupovine </p>
        </div>
        <div className="saved-searches">
          <SavedSearchBtn />
        </div>
      </div>
    </CarsHolder>
  );
};

export default Car;
