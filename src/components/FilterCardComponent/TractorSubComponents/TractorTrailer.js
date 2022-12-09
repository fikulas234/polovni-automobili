import VehiclesInputs from "../VehiclesFirstInputs";
import Vehicle from "../Vehicle";

const TractorTrailer = () => {
  return (
    <>
      <VehiclesInputs fifthInput={"Tip"} sixthInput={"Namena"} />
      <Vehicle
        vehicleState={"Region"}
        vehicleLink={"Nove prikolice"}
        garancija={"hidden"}
        input={"visible"}
        inputsHS={"hidden"}
        seventhInput={"Broj osovina"}
      />
    </>
  );
};

export default TractorTrailer;
