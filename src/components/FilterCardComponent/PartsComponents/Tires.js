import { PartsHolder } from "../../styles/PartsInputs.styled";
import { Options, Dimensions, StateSelection } from "../../styles/Tires.styled";
import SearchBtn from "../SearchBtn";

const Tires = () => {
  return (
    <PartsHolder>
      <div className="first-row row">
        <div className="filter-input-holder">
          <label>Kategorija guma</label>
          <input placeholder="Automobili" />
        </div>
        <div className="filter-input-holder tires-inputs">
          <label>Sezona</label>
          <Options>
            <div className="label-and-checkbox">
              <input type="radio" checked name="tire-select" />
              <label>Zimska</label>
            </div>
            <div className="label-and-checkbox">
              <input type="radio" name="tire-select" />
              <label>Letnja</label>
            </div>
            <div className="label-and-checkbox">
              <input type="radio" name="tire-select" />
              <label>Sve sez.</label>
            </div>
          </Options>
        </div>
      </div>
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

export default Tires;
