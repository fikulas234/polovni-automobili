import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #222;
  padding: 0 10px;
  padding-bottom: 50px;

  h3 {
    color: #9f9f9f;
  }

  ul {
    list-style: none;
    padding-left: 10px;
    color: #fff;
  }

  li {
    font-size: 14px;
  }

  li a:hover {
    color: #9f9f9f;
    cursor: pointer;
  }

  p {
    text-align: center;
    font-size: 11px;
    line-height: 16px;
    margin-top: 15px;
    color: #9f9f9f;
  }
`;

export const LinksAndData = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const LogoBrands = styled.div``;
export const IndividualBrands = styled.div`
  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const WantedModels = styled.div`
  h3 {
    padding-top: 20px;
    margin-bottom: 15px;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
    color: #9f9f9f;
    width: 100%;
  }

  a {
    display: block;
    text-align: center;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #00000080;
    transition: background-color 0.15s ease;
  }

  a:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 20px;

    a {
      flex-direction: row;
      flex-wrap: wrap;
      flex: 1 1 200px;
    }

    h3 {
      padding-top: 0;
    }
  }
`;

export const QuickLinksContainer = styled.div`
  margin-bottom: 20px;

  li {
    margin: 10px 5px 0 5px;
  }

  ul {
    padding: 0;
  }

  h3 {
    margin-top: 15px;
    padding: 0;
  }

  @media (min-width: 768px) {
    width: 30%;
    margin-top: 20px;
    padding: 0 30px;

    h3 {
      margin-top: 0;
    }
  }
`;

export const ContactContainer = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 20px;

  button {
    display: inline-block;
    border: 1px solid #f1a41a;
    background-color: transparent;
    padding: 8px 40px;
    color: #f1a41a;
    text-align: center;
    border-radius: 5px;
  }

  button:hover {
    color: #f1a41a;
    background: #444;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    text-align: start;
  }
`;

export const SocialNetworks = styled.div`
  margin: 25px 0px;
  text-align: center;
  padding-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    margin-bottom: 15px;
    filter: invert(74%) sepia(0%) saturate(0%) hue-rotate(50deg) brightness(96%)
      contrast(88%);
  }

  a {
    margin: 8px;
  }

  @media (min-width: 768px) {
    text-align: start;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const AppsDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 30px;

  a {
    display: inline-block;
    width: 123px;
    height: 37px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`;

export const InspiraLogoContainer = styled.div`
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid #9f9f9f;

  a {
    display: inline-block;
    width: 100px;
    margin: 0 10px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 960px) {
    border: none;
    position: relative;

    &::before {
      content: "";
      padding-left: 10px;
      display: block;
      width: 40%;
      height: 1px;
      background: #9f9f9f;
      left: 0;
      top: 50%;
      position: absolute;
    }

    &::after {
      content: "";
      padding-right: 10px;
      display: block;
      width: 40%;
      height: 1px;
      background: #9f9f9f;
      right: 0;
      top: 50%;
      position: absolute;
    }

    a {
      width: 160px;
    }
  }
`;

export const SecondRowLogo = styled.div`
  border-top: 1px solid #9f9f9f;
  text-align: center;
  padding-top: 15px;

  @media (min-width: 960px) {
    border: none;
    width: 45%;
  }
`;

export const InfoStudMain = styled.div`
  a {
    width: 95px;
    display: inline-block;
    padding-bottom: 30px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoStudProjects = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9f9f9f;

  a {
    display: inline-block;
    padding-bottom: 20px;
  }

  .poslovi-logo,
  .startuj-logo {
    width: 70px;
  }

  .hrlab-logo {
    width: 55px;
  }

  .helloworld-logo {
    width: 100px;
  }

  img {
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
  }

  @media (min-width: 960px) {
    border: none;
  }
`;
export const ThirdRowLogo = styled.div`
  padding: 15px 10px 0 10px;

  @media (min-width: 960px) {
    display: none;
  }
`;

export const ThirdRowLogoDesktop = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 50%;

    a {
      display: inline-block;
      padding-bottom: 20px;
      margin: 0 10px;
    }

    img {
      width: 100%;
      height: 100%;
      padding: 0 5px 20px 0;
    }
  }
`;

export const BrandRowFirstDesktop = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

    .polovni-logo,
    .cetiri-zida-logo,
    .osiguranik-logo {
      width: 100px;
    }

    .ipg-logo {
      width: 80px;
    }
  }
`;
export const BrandRowSecondDesktop = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    justify-content: space-between;

    .autohub-logo,
    .moja-garaza-logo,
    .inspirahub-logo {
      width: 100px;
    }

    .prodaja-delova-logo {
      width: 120px;
    }
  }
`;

export const BrandRowFirst = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: inline-block;
    padding-bottom: 20px;
  }

  .polovni-logo,
  .cetiri-zida-logo {
    width: 75px;
  }

  .ipg-logo {
    width: 60px;
  }

  img {
    width: 100%;
    height: 100%;
    padding: 0 5px 20px 0;
  }
`;

export const BrandRowSecond = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: inline-block;
    padding-bottom: 20px;
  }

  .osiguranik-logo {
    width: 85px;
  }
  .autohub-logo {
    width: 75px;
  }
  .prodaja-delova-logo {
    width: 90px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
export const BrandRowThird = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    display: inline-block;
    padding-bottom: 20px;
    width: 100px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
