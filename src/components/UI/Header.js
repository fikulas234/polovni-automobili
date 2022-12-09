import { useState, useEffect } from "react";

import logo1 from "../../img/polovni-aut-logo.svg";
import youtube from "../../img/youtube.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import facebook from "../../img/facebook.png";
import linkedIn from "../../img/linkedin.png";
import car from "../../img/car-icon.png";
import magnifier from "../../img/magnifier.png";
import hamburger from "../../img/more.png";
import savama from "../../img/savama.PNG";
import downArrow from "../../img/down-arrow.png";

import DropDownNav from "./DropDownNav";
import HamburgerNavLinksItems from "./HamburgerNavLinksItems";
import VehicleListMobile from "./VehicleListMobile";

import {
  HeaderContainer,
  Logos,
  HamburgerNav,
  SocialNetworks,
  RightSideHeader,
  SignInContainer,
  DropDownNavContainer,
  SignUpContainer,
  SubmitAd,
  NavigationMenuContainer,
  ProfileMenu,
  SignInButton,
  SignInButtonFacebook,
  RegisterButton,
  HamburgerNavLinks,
  ChooseVehicleCategory,
} from "../styles/Header.styled";

const Header = (props) => {
  //sign in dropdown
  const [dropDownNav, setDropDownNav] = useState("hidden");

  // vehicle type search
  const [isCarIconClicked, setIsCarIconClicked] = useState(false);
  const [vehicleTypeClass, setVehicleTypeClass] = useState("hidden");

  // show filter card
  const [isMagnifierIconClicked, setMagnifierIconClicked] = useState(false);

  // hamburger nav
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [navMenuClass, setNavMenuClass] = useState("hidden");

  // body overlay
  const [overlay, setOverlay] = useState("overlay hidden");

  // which vehicle icon clicked on mobile version
  const [iconIndex, setIconIndex] = useState(0);

  useEffect(() => {
    props.clicked(isMagnifierIconClicked);
  }, [isMagnifierIconClicked]);

  useEffect(() => {
    props.vehicleIconMobile(iconIndex);
  }, [iconIndex]);

  const updateHamburgerMenu = () => {
    if (!isMenuClicked) {
      setNavMenuClass("visible");
      setOverlay("overlay visible");
      document.body.style.overflow = "hidden";
    } else {
      setNavMenuClass("hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const closeOverlay = () => {
    setOverlay("overlay hidden");
    setNavMenuClass("hidden");
    setIsMenuClicked(!isMenuClicked);
    document.body.style.overflow = "unset";
  };

  const updateVehicleTypeMenu = () => {
    if (!isCarIconClicked) {
      setVehicleTypeClass("visible");
    } else {
      setVehicleTypeClass("hidden");
    }

    setIsCarIconClicked(!isCarIconClicked);
  };

  const closeVehicleTypeMenu = () => {
    setVehicleTypeClass("hidden");
    setIsCarIconClicked(!isCarIconClicked);
  };

  const whichVehicleIcon = (id) => {
    setIconIndex(id);
  };

  return (
    <HeaderContainer>
      <div onClick={closeOverlay} className={overlay}></div>
      <nav>
        <Logos>
          <a href="#">
            <img src={logo1} alt="car-logo" className="car-logo" />
          </a>
          <a href="#">
            <img
              src={savama}
              alt="18-godina-sa-vama"
              className="anniversary-logo"
            />
          </a>
        </Logos>
        <HamburgerNav>
          <a onClick={updateVehicleTypeMenu}>
            <img src={car} alt="car-icon" />
          </a>
          <a onClick={() => setMagnifierIconClicked((prevCount) => !prevCount)}>
            <img src={magnifier} alt="magnifier-icon" />
          </a>
          <a onClick={updateHamburgerMenu}>
            <img src={hamburger} alt="more-menu" />
          </a>
        </HamburgerNav>
        <SocialNetworks>
          <a href="#">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={linkedIn} alt="linkedIn" />
          </a>
        </SocialNetworks>
        <RightSideHeader>
          <SignInContainer
            onMouseEnter={() => setDropDownNav("visible")}
            onMouseLeave={() => setDropDownNav("hidden")}
          >
            <p>Prijavi se</p>
            <small>Moj profil</small>
            <img src={downArrow} alt="down-arrow" />
            <DropDownNavContainer className={dropDownNav}>
              <DropDownNav />
            </DropDownNavContainer>
          </SignInContainer>
          <SignUpContainer>
            <a href="#">REGISTRUJ SE</a>
          </SignUpContainer>
          <SubmitAd>
            <button>POSTAVI OGLAS</button>
          </SubmitAd>
        </RightSideHeader>
      </nav>

      <NavigationMenuContainer className={navMenuClass}>
        <ul>
          <li>
            <ProfileMenu>
              <SignInButton>Uloguj se</SignInButton>
              <SignInButtonFacebook>
                Prijavi se putem facebook-a
              </SignInButtonFacebook>
              <RegisterButton>Registruj se</RegisterButton>
            </ProfileMenu>
          </li>
          <HamburgerNavLinks>
            <HamburgerNavLinksItems />
          </HamburgerNavLinks>
        </ul>
      </NavigationMenuContainer>

      <ChooseVehicleCategory className={vehicleTypeClass}>
        <a onClick={closeVehicleTypeMenu} className="close-vehicle-menu">
          Zatvori
        </a>
        <VehicleListMobile
          iconID={whichVehicleIcon}
          clicked={closeVehicleTypeMenu}
        />
      </ChooseVehicleCategory>
    </HeaderContainer>
  );
};

export default Header;
