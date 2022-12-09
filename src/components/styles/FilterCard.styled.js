import styled from "styled-components";

export const VehiclesCard = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .vehicles-icons {
    height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: #4444448c;
    border-radius: 5px 5px 0 0;
  }

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
  }

  .active,
  .vehicle-icon:hover {
    background-color: #faa61a;
  }

  img {
    width: 50px;
    height: 50px;
    padding: 5px;
  }

  h1 {
    width: 100%;
  }

  @media (min-width: 960px) {
    display: block;
    margin: 0;
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 100%;
    h1 {
      text-align: center;
    }
  }
`;

export const VehiclesHolder = styled.div`
  box-shadow: 0 0 10px 5px #ccc;
  border-radius: 5px;
  display: block;

  /*   .vehicle-wrapper {
    max-height: 0;
    transition: max-height 0.15s ease-out;
  } */

  @media (max-width: 960px) {
    box-shadow: none;

    .vehicles-icons {
      display: none;
    }
  }

  @media (max-width: 600px) {
    border: none;

    .vehicle-wrapper.visible,
    .parts-wrapper.visible {
      display: block;
      max-height: 1000px;
      transition: max-height 0.25s ease-in;
    }

    .vehicle-wrapper.hidden,
    .parts-wrapper.hidden {
      max-height: 0;
      transition: max-height 0.15s ease-out;
      overflow: hidden;
      box-shadow: 0;
    }
  }
`;
