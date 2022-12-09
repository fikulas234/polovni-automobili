import VehiclesInputs from "../VehiclesFirstInputs";
import VehicleMoreInputs from "../VehicleSecondInputs";

const Trailer = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Tip"} sixthInput={"Region"} />
      <VehicleMoreInputs
        vehicleState={"Polovne i nove prikolice"}
        vehicleType={"Nove prikolice i poluprikolice"}
      />
    </>
  );
};

export default Trailer;
