import styled from "styled-components";

export const ShoppingGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 10px;

  img {
    margin: 0 20px;
    width: 80px;
    height: 87px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.2em;
    color: #00a8e6;
    margin: 0;
  }

  p {
    margin: 15px 0;
    padding: 0;
    font-size: 1em;
    font-weight: 400;
  }

  .content {
    display: flex;
  }

  a {
    background: #fff;
    color: #39f;
    text-decoration: none;
    padding: 10px 40px;
    border: 1px solid #00a8e6;
    border-radius: 5px;
  }

  a:hover {
    background-color: #00a8e6;
    color: #fff;
  }

  .btn-container {
    text-align: center;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .content {
      width: 70%;
    }

    .btn-container {
      width: 30%;
    }
  }
`;
