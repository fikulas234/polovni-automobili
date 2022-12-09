import { PartsHolder } from "../../styles/PartsInputs.styled";
import { StateSelection } from "../../styles/Tires.styled";

import SearchBtn from "../SearchBtn";

const OneInput = () => {
  return (
    <PartsHolder>
      <div className="filter-input-holder">
        <input placeholder="Upisi deo koji trazis" />
      </div>
      <StateSelection>
        <label>Stanje</label>
        <div className="label-and-checkbox">
          <input type="checkbox" />
          <label>Polovno</label>
          <input type="checkbox" />
          <label>Novo</label>
        </div>
      </StateSelection>
      <div className="search-btn-holder">
        <SearchBtn />
      </div>
    </PartsHolder>
  );
};

export default OneInput;
