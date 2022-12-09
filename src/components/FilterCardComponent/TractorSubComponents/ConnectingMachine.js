import VehiclesInputs from "../VehiclesFirstInputs";
import Vehicle from "../Vehicle";

const ConnectingMachine = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Tip"} sixthInput={"Namena"} />
      <Vehicle
        vehicleState={"Region"}
        vehicleLink={"Novi masine"}
        garancija={"hidden"}
        input={"visible"}
        inputsHS={"hidden"}
        seventhInput={"Nacin transporta"}
      />
    </>
  );
};

export default ConnectingMachine;
