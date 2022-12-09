import Vehicle from "../Vehicle";
import VehiclesInputs from "../VehiclesFirstInputs";

const Van = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Karoserija"} sixthInput={"Gorivo"} />
      <Vehicle
        vehicleState={"Polovna i nova vozila"}
        vehicleLink={"Nova vozila"}
        garancija={"hidden"}
        input={"visible"}
        inputsHS={"hidden"}
        seventhInput={"Region"}
      />
    </>
  );
};

export default Van;
