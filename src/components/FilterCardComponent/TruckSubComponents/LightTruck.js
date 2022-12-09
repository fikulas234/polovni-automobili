import Vehicle from "../Vehicle";
import VehiclesInputs from "../VehiclesFirstInputs";

const LightTruck = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Karoserija"} sixthInput={"Gorivo"} />
      <Vehicle
        vehicleState={"Polovni i novi kamioni"}
        vehicleLink={"Novi kamioni"}
        garancija={"hidden"}
        input={"visible"}
        inputsHS={"hidden"}
        seventhInput={"Region"}
      />
    </>
  );
};

export default LightTruck;
