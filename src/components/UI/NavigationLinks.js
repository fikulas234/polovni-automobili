import { NavigationLinksHolder } from "../styles/NavigationLinks.styled";
import downArrow from "../../img/down-arrow.png";

const NavigationLinks = () => {
  return (
    <NavigationLinksHolder>
      <div className="links-container">
        <ul>
          <li>
            <a href="#">BRZA PRETRAGA</a>
            <img src={downArrow} alt="down-arrow" />
          </li>
          <li>
            <a href="#">PONUDA VOZILA</a>
            <img src={downArrow} alt="down-arrow" />
          </li>
          <li>
            <a href="#">DELOVI I OPREMA</a>
            <img src={downArrow} alt="down-arrow" />
          </li>
          <li>
            <a href="#">PRODAJEM</a>
            <img src={downArrow} alt="down-arrow" />
          </li>
          <li>
            <a href="#">AUTO OSIGURANJE</a>
            <img src={downArrow} alt="down-arrow" />
          </li>
          <li>
            <a href="#">SAVETI I VESTI</a>
          </li>
          <li>
            <a href="#">USLUGE I KREDITI</a>
          </li>
          <li>
            <a href="#">PONUDA ZA OGLASAVANJE</a>
          </li>
        </ul>
      </div>
    </NavigationLinksHolder>
  );
};

export default NavigationLinks;
