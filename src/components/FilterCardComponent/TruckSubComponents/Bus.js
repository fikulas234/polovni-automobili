import Vehicle from "../Vehicle";
import VehiclesInputs from "../VehiclesFirstInputs";

const Bus = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Kilometraza do"} sixthInput={"Gorivo"} />
      <Vehicle
        vehicleState={"Polovne i nove autobuse"}
        vehicleLink={"Novi autobusi"}
        garancija={"hidden"}
        input={"visible"}
        inputsHS={"hidden"}
        seventhInput={"Region"}
      />
    </>
  );
};

export default Bus;
