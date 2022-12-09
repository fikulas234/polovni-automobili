import cartAuto from "../../img/vodicZaKupovinu.png";

import { ShoppingGuideContainer } from "../styles/ShoppingGuide.styled";

const ShoppingGuide = () => {
  return (
    <>
      <ShoppingGuideContainer>
        <div className="content">
          <img src={cartAuto} />
          <div className="text-content">
            <h3>Vodič za kupovinu automobila</h3>
            <p>
              Koji model je po tvojoj meri? Koliki su realni troškovi pri
              kupovini? Saznaj šta te sve čeka na putu do tvog idealnog
              automobila.
            </p>
          </div>
        </div>
        <div className="btn-container">
          <a href="#">PRELISTAJ VODIC</a>
        </div>
      </ShoppingGuideContainer>
    </>
  );
};

export default ShoppingGuide;
