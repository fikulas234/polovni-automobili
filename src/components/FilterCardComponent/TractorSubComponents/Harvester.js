import VehiclesInputs from "../VehiclesFirstInputs";
import Vehicle from "../Vehicle";

const Harvester = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Tip"} sixthInput={"Namena"} />
      <Vehicle
        vehicleState={"Region"}
        vehicleLink={"Novi kombajni"}
        garancija={"hidden"}
        fourthInput={"hidden"}
        inputsHS={"visible"}
      />
    </>
  );
};

export default Harvester;
