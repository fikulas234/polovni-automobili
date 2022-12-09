import React from "react";
import { InspiraHeaderContainer } from "../styles/InspiraHeader.styled";
import inspiraLogo from "../../img/inspira-logo-grey.svg";

const InspiraHeader = () => {
  return (
    <InspiraHeaderContainer>
      <div className="header-logo">
        <a href="#">
          <img src={inspiraLogo} />
        </a>
      </div>
      <div className="header-info">
        <h1>
          <span>Inspira grupa</span> - biznisi koji vode napred. Polovni
          automobili su deo Inspira grupe.
        </h1>
        <a href="#">Saznaj više</a>
      </div>
    </InspiraHeaderContainer>
  );
};

export default InspiraHeader;
