import VehiclesInputs from "../VehiclesFirstInputs";
import Vehicle from "../Vehicle";

const Tractor = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Tip"} sixthInput={"Namena"} />
      <Vehicle
        vehicleState={"Region"}
        vehicleLink={"Novi traktori"}
        garancija={"hidden"}
        fourthInput={"hidden"}
        inputsHS={"visible"}
      />
    </>
  );
};

export default Tractor;
