import { NavigationLinksHolder } from "../../styles/NavigationLinks.styled";
import downArrow from "../../../img/down-arrow.png";

const NavigationLinks = () => {
  const links = [
    {
      linkText: "BRZA PRETRAGA",
      img: downArrow,
    },
    {
      linkText: "PONUDA VOZILA",
      img: downArrow,
    },
    {
      linkText: "DELOVI I OPREMA",
      img: downArrow,
    },
    {
      linkText: "PRODAJEM",
      img: downArrow,
    },
    {
      linkText: "AUTO OSIGURANJE",
      img: downArrow,
    },
    {
      linkText: "SAVETI I VESTI",
    },
    {
      linkText: "USLUGE I KREDITI",
    },
    {
      linkText: "PONUDA ZA OGLASAVANJE",
    },
  ];

  return (
    <NavigationLinksHolder>
      <div className="links-container">
        <ul>
          {links.map((link, indexID) => (
            <li key={indexID}>
              <a href="#">{link.linkText}</a>
              {link.img && <img src={downArrow} alt="down-arrow" />}
            </li>
          ))}
        </ul>
      </div>
    </NavigationLinksHolder>
  );
};

export default NavigationLinks;
