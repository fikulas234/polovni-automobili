import { PartsHolder } from "../../styles/PartsInputs.styled";
import SearchBtn from "../SearchBtn";

const AutoParts = () => {
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
        <div className="filter-input-holder input-with-checkbox">
          <input placeholder="Upisi deo koji trazis" />
          <div className="input-and-checkbox">
            <input type="checkbox" />
            <label>prikaži samo oglase sa cenom</label>
          </div>
        </div>

        <div className="filter-input-holder">
          <input placeholder="Kataloski broj" />
        </div>
      </div>
      <div className="search-btn-holder">
        <SearchBtn />
      </div>
    </PartsHolder>
  );
};

export default AutoParts;
