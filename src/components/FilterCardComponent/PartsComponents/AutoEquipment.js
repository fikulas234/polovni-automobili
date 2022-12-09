import { PartsHolder } from "../../styles/PartsInputs.styled";
import SearchBtn from "../SearchBtn";

const AutoEquipment = () => {
  return (
    <PartsHolder>
      <div className="first-row row">
        <div className="filter-input-holder">
          <input placeholder="Marka" />
        </div>
        <div className="filter-input-holder">
          <input placeholder="Model" />
        </div>
        <div className="filter-input-holder">
          <input placeholder="Godiste" />
        </div>
      </div>
      <div className="second-row row">
        <div className="filter-input-holder">
          <input placeholder="Upisi deo koji trazis" />
        </div>
      </div>
      <div className="search-btn-holder">
        <SearchBtn />
      </div>
    </PartsHolder>
  );
};

export default AutoEquipment;
