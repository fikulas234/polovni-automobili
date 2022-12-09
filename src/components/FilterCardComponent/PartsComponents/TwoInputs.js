import { PartsHolder } from "../../styles/PartsInputs.styled";
import { StateSelection } from "../../styles/Tires.styled";
import { CategoryInput } from "../../styles/TruckParts.styled";

import SearchBtn from "../SearchBtn";

const TwoInputs = () => {
  return (
    <>
      <PartsHolder>
        <CategoryInput>
          <div className="filter-input-holder category">
            <label>Kategorija</label>
            <input />
          </div>
          <div className="filter-input-holder">
            <input placeholder="Upisi deo koji trazis" />
          </div>
        </CategoryInput>
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
    </>
  );
};

export default TwoInputs;
