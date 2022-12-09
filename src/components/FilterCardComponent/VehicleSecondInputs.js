import { ThirdRow, FourthRow } from "../styles/VehicleSecondInputs.Styled";
import SearchBtn from "./SearchBtn";
import DetailedSearchBtn from "./DetailedSearchBtn";

const VehicleMoreInputs = (props) => {
  return (
    <>
      <ThirdRow className="row">
        <div className="filter-input-holder">
          <input placeholder={props.vehicleState}></input>
        </div>
        <div className="checkboxes-container">
          <div className="input-checkbox">
            <input type="checkbox" />
            <label>Kredit</label>
          </div>
          <div className="input-checkbox">
            <input type="checkbox" />
            <label>Lizing</label>
          </div>
        </div>
        <div className="filter-input-holder search-btn-holder">
          <SearchBtn />
        </div>
      </ThirdRow>
      <FourthRow className="row">
        <div className="new-vehicles">
          <a href="#">{props.vehicleType}</a>
        </div>
        <div className="recent-ads">
          <a>Najnoviji oglasi</a>
        </div>
        <div className="advanced-search">
          <DetailedSearchBtn />
        </div>
      </FourthRow>
    </>
  );
};

export default VehicleMoreInputs;
