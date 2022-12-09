import { CarsHolder } from "../styles/Car.styled";
import VehiclesInputs from "./VehiclesFirstInputs";
import { ThirdRow, FourthRow } from "../styles/Bike.styled";
import SearchBtn from "./SearchBtn";
import DetailedSearchBtn from "./DetailedSearchBtn";

import { useEffect } from "react";

const Bike = (props) => {
  const title = "Bicikli";
  useEffect(() => {
    props.titleName(title);
  }, []);
  return (
    <>
      <CarsHolder>
        <VehiclesInputs fifthInput={"Tip"} sixthInput={"Region"} />
        <ThirdRow className="row">
          <div className="filter-input-holder">
            <input placeholder="Polovni i novi bicikli"></input>
          </div>
          <div className="new-vehicles">
            <a href="#">Novi bicikli</a>
          </div>
          <div className="recent-ads">
            <a>Najnoviji oglasi</a>
          </div>
          <div className="filter-input-holder search-btn-holder">
            <SearchBtn />
          </div>
        </ThirdRow>
        <FourthRow className="row">
          <div className="advanced-search">
            <DetailedSearchBtn />
          </div>
        </FourthRow>
      </CarsHolder>
    </>
  );
};

export default Bike;
