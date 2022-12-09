import VehiclesInputs from "../VehiclesFirstInputs";
import VehicleMoreInputs from "../VehicleSecondInputs";

const Camper = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Gorivo"} sixthInput={"Region"} />
      <VehicleMoreInputs
        vehicleState={"Polovne i nove kampere"}
        vehicleType={"Novi kamperi"}
      />
    </>
  );
};

export default Camper;
