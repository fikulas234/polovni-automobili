import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    padding-top: 24px;
    padding-bottom: 14px;
    background-color: #222;
    color: #fff;
  }

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
  .visible {
    display: block;
  }
  .hidden {
    display: none;
  }
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;

  .car-logo {
    width: 50px;
    height: 40px;
  }

  .anniversary-logo {
    width: 130px;
    height: 40px;
    margin-left: 10px;
  }
`;

export const HamburgerNav = styled.div`
  display: flex;

  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    filter: invert(56%) sepia(76%) saturate(461%) hue-rotate(360deg)
      brightness(102%) contrast(102%);
    margin-left: 20px;
    cursor: pointer;
  }

  a:nth-child(1) {
    width: 40px;
    height: 40px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

export const SocialNetworks = styled.div`
  img {
    width: 20px;
    height: 20px;
    filter: invert(74%) sepia(0%) saturate(0%) hue-rotate(50deg) brightness(96%)
      contrast(88%);
  }

  a:not(:last-child) {
    margin-right: 20px;
  }

  display: none;

  @media (min-width: 960px) {
    display: flex;
  }
`;

export const RightSideHeader = styled.div`
  gap: 20px;
  display: none;

  @media (min-width: 960px) {
    display: flex;
  }
`;

export const SignInContainer = styled.div`
  position: relative;
  padding: 10px 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #f1a41a;
  }

  img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    filter: invert(66%) sepia(99%) saturate(849%) hue-rotate(347deg)
      brightness(97%) contrast(95%);
  }

  div {
    position: absolute;
    top: 60px;
    width: 160px;
    text-align: start;
    padding: 20px 0;
    background-color: #222;
    transition: all 1s ease;
    z-index: 2;
  }
`;

export const DropDownNavContainer = styled.div`
  position: absolute;
  top: 60px;
  width: 160px;
  text-align: start;
  padding: 20px 0;
  background-color: #222;
  transition: all 1s ease;

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color: #fff;
    margin: 0;
    padding: 5px 10px;
  }

  a:hover {
    background-color: #717171;
  }

  &.visible {
    display: block;
  }

  &.hidden {
    display: none;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #f1a41a;
  }
`;

export const SubmitAd = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #3399ff;
    border: none;
    padding: 10px 20px;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.95;
  }
`;

export const NavigationMenuContainer = styled.div`
  position: absolute;
  width: 270px;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  overflow-y: auto;
  z-index: 1001;

  ul {
    padding: 0;
    list-style: none;
  }

  &.visible {
    display: block;
  }

  &.hidden {
    display: none;
  }
`;

export const ProfileMenu = styled.span`
  display: flex;
  flex-direction: column;
  background-color: #232323;
  padding: 20px 15px;
  border-bottom: 1px solid #444445;

  a {
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
  }
`;

export const SignInButton = styled.a`
  background-color: #f1b905;
  color: #464646;
  margin: 0 0 15px 0;
  cursor: pointer;
`;
export const SignInButtonFacebook = styled.a`
  background-color: #6d84b4;
  color: #fff;
  margin: 0 0 15px 0;
  cursor: pointer;
`;
export const RegisterButton = styled.a`
  color: #fff;
  background-color: #c4122f;
  margin: 0;
  cursor: pointer;
`;

export const HamburgerNavLinks = styled.ul`
  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    font-size: 1.3em;
    font-weight: 500;
    width: 100%;
    padding: 10px 15px;
    margin: 0;
    cursor: pointer;
  }

  a:hover {
    background: #808080;
    color: #fff;
  }
`;

export const ChooseVehicleCategory = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  width: 40%;
  top: 0;
  right: 0;
  background: #f4f4f4;
  height: 100vh;
  overflow-y: auto;
  box-shadow: 1px 1px 3px 1px #696969;
  z-index: 1001;

  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px 0;
    text-decoration: none;
    color: #8d8d8d;
    border-bottom: 1px solid #d2d2d2;
  }

  a.active {
    background-color: #fff;
  }

  span {
    font-size: 12px;
  }

  img {
    width: 30px;
    height: 30px;
    filter: invert(61%) sepia(1%) saturate(1146%) hue-rotate(330deg)
      brightness(92%) contrast(88%);
  }

  .close-vehicle-menu {
    cursor: pointer;
    padding: 20px 0;
  }

  .visible {
    display: flex;
  }

  .hidden {
    display: none;
  }
`;
