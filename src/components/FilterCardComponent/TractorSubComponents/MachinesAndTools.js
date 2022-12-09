import VehiclesInputs from "../VehiclesFirstInputs";
import VehicleMoreInputs from "../VehicleSecondInputs";

const MachinesAndTools = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Tip"} sixthInput={"Namena"} />
      <VehicleMoreInputs
        vehicleState={"Region"}
        vehicleType={"Novi masine i alati"}
      />
    </>
  );
};

export default MachinesAndTools;
