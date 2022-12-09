import youtube from "../../img/youtube.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import facebook from "../../img/facebook.png";
import linkedIn from "../../img/linkedin.png";
import googlePlay from "../../img/google-play.png";
import appStore from "../../img/app-store.png";
import huaweiStore from "../../img/huawei-store.png";
import inspiraLogo from "../../img/inspira-logo.svg";
import infostudMain from "../../img/infostud.svg";
import infostudPoslovi from "../../img/poslovi_infostud.svg";
import startujLogo from "../../img/startuj.svg";
import hrLabLogo from "../../img/hrlab.svg";
import helloWorld from "../../img/helloworld.svg";
import polovniAutomobiliLogo from "../../img/polovniautomobili.svg";
import cetiriZidaLogo from "../../img/4zida.svg";
import ipgLogo from "../../img/ipg.svg";
import osiguranikLogo from "../../img/osiguranik.svg";
import autohubLogo from "../../img/autohub.svg";
import prodajadelovaLogo from "../../img/prodajadelova.svg";
import mojaGaraza from "../../img/mojagaraza.svg";
import inspiraHub from "../../img/inspirahub.svg";

import WantedCarsList from "./WantedCarsList";
import FooterQuickLinks from "./FooterQuickLinks";

import {
  FooterContainer,
  WantedModels,
  QuickLinksContainer,
  ContactContainer,
  ButtonContainer,
  SocialNetworks,
  LinksAndData,
  LogoBrands,
  IndividualBrands,
  AppsDownload,
  InspiraLogoContainer,
  SecondRowLogo,
  InfoStudMain,
  InfoStudProjects,
  ThirdRowLogo,
  BrandRowFirst,
  BrandRowSecond,
  BrandRowThird,
  ThirdRowLogoDesktop,
  BrandRowFirstDesktop,
  BrandRowSecondDesktop,
} from "../styles/Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <LinksAndData>
        <WantedModels>
          <h3>Najtrazeniji modeli</h3>
          <div>
            <WantedCarsList />
          </div>
        </WantedModels>
        <QuickLinksContainer>
          <h3>Brzi linkovi</h3>
          <FooterQuickLinks />
        </QuickLinksContainer>
        <ContactContainer>
          <h3>Kontakt redakcije sajta</h3>
          <ButtonContainer>
            <button>Kontaktiraj nas</button>
          </ButtonContainer>
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
          <AppsDownload>
            <a href="#">
              <img src={googlePlay} alt="google-play" />
            </a>
            <a href="#">
              <img src={appStore} alt="app-store" />
            </a>
            <a href="#">
              <img src={huaweiStore} alt="huawei-store" />
            </a>
          </AppsDownload>
        </ContactContainer>
      </LinksAndData>

      <LogoBrands>
        <InspiraLogoContainer>
          <a>
            <img src={inspiraLogo} alt="inspira-logo" />
          </a>
        </InspiraLogoContainer>
        <IndividualBrands>
          <SecondRowLogo>
            <InfoStudMain>
              <a>
                <img src={infostudMain} />
              </a>
            </InfoStudMain>
            <InfoStudProjects>
              <a
                href="https://poslovi.infostud.com/"
                target="_blank"
                className="poslovi-logo"
              >
                <img src={infostudPoslovi} alt="infostud-poslovi-logo" />
              </a>
              <a
                href="https://startuj.com/"
                target="_blank"
                className="startuj-logo"
              >
                <img src={startujLogo} alt="startuj-logo" />
              </a>
              <a
                href="https://www.hrlab.rs"
                target="_blank"
                className="hrlab-logo"
              >
                <img src={hrLabLogo} alt="hrlab-logo" />
              </a>
              <a
                href="https://www.helloworld.rs/"
                target="_blank"
                className="helloworld-logo"
              >
                <img src={helloWorld} alt="helloworld-logo" />
              </a>
            </InfoStudProjects>
          </SecondRowLogo>
          <ThirdRowLogo>
            <BrandRowFirst>
              <a href="#" target="_blank" className="polovni-logo">
                <img
                  src={polovniAutomobiliLogo}
                  alt="polovni-automobili-logo"
                />
              </a>
              <a
                href="https://www.4zida.rs/"
                target="_blank"
                className="cetiri-zida-logo"
              >
                <img src={cetiriZidaLogo} alt="cetiri-zida-logo" />
              </a>
              <a
                href="https://www.internet-prodaja-guma.com/"
                target="_blank"
                className="ipg-logo"
              >
                <img src={ipgLogo} alt="internet-prodaja-guma-logo" />
              </a>
            </BrandRowFirst>
            <BrandRowSecond>
              <a
                href="https://www.osiguranik.com/"
                target="_blank"
                className="osiguranik-logo"
              >
                <img src={osiguranikLogo} alt="osiguranik-logo" />
              </a>
              <a
                href="https://www.autohub.rs/"
                target="_blank"
                className="autohub-logo"
              >
                <img src={autohubLogo} alt="autohub-logo" />
              </a>
              <a
                href="https://www.prodajadelova.rs/"
                target="_blank"
                className="prodaja-delova-logo"
              >
                <img src={prodajadelovaLogo} alt="prodaja-delova-logo" />
              </a>
            </BrandRowSecond>
            <BrandRowThird>
              <a
                href="https://www.mojagaraza.rs/"
                target="_blank"
                className="moja-garaza-logo"
              >
                <img src={mojaGaraza} alt="" />
              </a>
              <a
                href="https://www.inspirahub.rs/"
                target="_blank"
                className="inspirahub-logo"
              >
                <img src={inspiraHub} alt="" />
              </a>
            </BrandRowThird>
          </ThirdRowLogo>
          <ThirdRowLogoDesktop>
            <BrandRowFirstDesktop>
              <a href="#" className="polovni-logo">
                <img
                  src={polovniAutomobiliLogo}
                  alt="polovni-automobili-logo"
                />
              </a>
              <a href="#" className="cetiri-zida-logo">
                <img src={cetiriZidaLogo} alt="cetiri-zida-logo" />
              </a>
              <a href="#" className="ipg-logo">
                <img src={ipgLogo} alt="internet-prodaja-guma-logo" />
              </a>
              <a href="#" className="osiguranik-logo">
                <img src={osiguranikLogo} alt="osiguranik-logo" />
              </a>
            </BrandRowFirstDesktop>
            <BrandRowSecondDesktop>
              <a href="#" className="autohub-logo">
                <img src={autohubLogo} alt="autohub-logo" />
              </a>
              <a href="#" className="prodaja-delova-logo">
                <img src={prodajadelovaLogo} alt="prodaja-delova-logo" />
              </a>
              <a href="#" className="moja-garaza-logo">
                <img src={mojaGaraza} alt="" />
              </a>
              <a href="#" className="inspirahub-logo">
                <img src={inspiraHub} alt="" />
              </a>
            </BrandRowSecondDesktop>
          </ThirdRowLogoDesktop>
        </IndividualBrands>
      </LogoBrands>
      <p>
        Sadržaj sajta polovniautomobili.com je vlasništvo Inspire. Zabranjeno je
        njegovo preuzimanje bez dozvole Inspire, zarad komercijalne upotrebe ili
        u druge svrhe, osim za lične potrebe posetilaca sajta. <br />
        Sajt Polovni Automobili je deo Inspira grupe.
      </p>
    </FooterContainer>
  );
};

export default Footer;
