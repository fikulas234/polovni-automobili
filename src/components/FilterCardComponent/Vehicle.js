import SearchBtn from "./SearchBtn";
import DetailedSearchBtn from "./DetailedSearchBtn";

const Vehicle = (props) => {
  return (
    <>
      <div className="third-row row">
        <div className={`filter-input-holder ${props.fourthInput}`}>
          <input placeholder={props.seventhInput}></input>
        </div>
        <div className={`filter-input-holder motor-power ${props.inputsHS}`}>
          <input placeholder="Snaga KS"></input>
          <input placeholder="do"></input>
        </div>
        <div className="filter-input-holder">
          <input placeholder={props.vehicleState}></input>
        </div>
        <div className="filter-input-holder search-btn-holder">
          <SearchBtn />
        </div>
      </div>
      <div className="fourth-row row">
        <div className="input-checkbox">
          <input type="checkbox" />
          <label>Kredit</label>
        </div>
        <div className="input-checkbox">
          <input type="checkbox" />
          <label>Lizing</label>
        </div>
        <div className={`input-checkbox ${props.garancija}`}>
          <input type="checkbox" />
          <label>Garancija</label>
        </div>
        <div className="recent-ads">
          <a>Najnoviji oglasi</a>
        </div>
        <div className="new-cars">
          <a href="#">{props.vehicleLink}</a>
        </div>
        <div className="advanced-search">
          <DetailedSearchBtn />
        </div>
      </div>
    </>
  );
};

export default Vehicle;
