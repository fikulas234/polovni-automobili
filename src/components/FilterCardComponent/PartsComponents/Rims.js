import { PartsHolder } from "../../styles/PartsInputs.styled";
import { Dimensions, StateSelection } from "../../styles/Tires.styled";
import { Types } from "../../styles/Rims.styled";
import SearchBtn from "../SearchBtn";

const Rims = () => {
  return (
    <PartsHolder>
      <Types>
        <div className="filter-input-holder rims-inputs">
          <label>Tip</label>

          <div className="label-and-checkbox">
            <input type="radio" checked name="tire-select" />
            <label>Alu</label>
          </div>
          <div className="label-and-checkbox">
            <input type="radio" name="tire-select" />
            <label>Celicne</label>
          </div>
          <div className="label-and-checkbox">
            <input type="radio" name="tire-select" />
            <label>Ratkapne</label>
          </div>
        </div>
      </Types>
      <Dimensions>
        <label>Dimenzije</label>
        <div className="dimension-options">
          <div className="filter-input-holder">
            <input placeholder="Sirina" />
          </div>
          <div className="filter-input-holder">
            <input placeholder="Visina" />
          </div>
          <div className="filter-input-holder">
            <input placeholder="Precnik" />
          </div>
        </div>
      </Dimensions>
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

export default Rims;
