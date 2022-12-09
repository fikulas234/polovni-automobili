import styled from "styled-components";

export const InspiraHeaderContainer = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  border: 1px solid #bfbfbf;
  border-radius: 15px;
  padding: 7px 15px;
  margin: 15px auto;

  .header-logo {
    border-right: 1px solid #bfbfbf;
    padding-right: 10px;
  }

  .header-logo a {
  }

  .header-logo img {
    width: 80px;
    height: auto;
  }

  h1 {
    font-size: 14px;
    font-weight: 400;
  }

  span {
    font-weight: 700;
  }

  .header-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
    color: #444;
  }

  .header-info a {
    display: inline-block;
    text-decoration: none;
    font-size: 14px;
    color: #39f;
  }

  @media (min-width: 791px) {
    width: 732px;

    h1 {
      margin-right: 10px;
    }

    .header-info {
      flex-direction: row;
      align-items: center;
    }

    .header-logo img {
      width: 42px;
      height: auto;
    }
  }
`;
