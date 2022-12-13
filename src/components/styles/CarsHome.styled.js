import styled from "styled-components";

export const CarsCardsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 30px auto;
  justify-content: space-around;

  section {
    width: 50%;
    border-radius: 5%;
    padding: 5px;
    height: 250px;
  }

  a {
    display: block;
    box-shadow: 0 2px 4px 1px #ccc;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
  }

  .card-img-holder {
    width: 100%;
    height: 75%;
  }

  section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }

  .name-and-price {
    padding: 3px;
    height: 25%;
  }

  h3 {
    font-weight: 600;
    font-size: 12px;
  }

  @media (min-width: 600px) {
    section {
      width: 50%;
    }

    section img {
      min-height: 100px;
    }
  }

  @media (min-width: 960px) {
    section {
      width: 20%;
    }
  }

  @media (min-width: 1200px) {
    width: 90%;
  }
`;
