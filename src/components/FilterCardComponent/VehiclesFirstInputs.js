const VehiclesInputs = (props) => {
  return (
    <>
      <div className="first-row row">
        <div className="filter-input-holder">
          <input placeholder="Sve marke"></input>
        </div>
        <div className="filter-input-holder">
          <input placeholder="Svi modeli"></input>
        </div>
        <div className="filter-input-holder">
          <input placeholder="Cena do"></input>
        </div>
      </div>
      <div className="second-row row">
        <div className="filter-input-holder">
          <div className="car-age">
            <input placeholder="Godiste od"></input>
            <input placeholder="do"></input>
          </div>
        </div>
        <div className="filter-input-holder">
          <input placeholder={props.fifthInput}></input>
        </div>
        <div className="filter-input-holder">
          <input placeholder={props.sixthInput}></input>
        </div>
      </div>
    </>
  );
};

export default VehiclesInputs;
