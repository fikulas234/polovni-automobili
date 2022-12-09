import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 40px;
  padding-left: 40px;
  display: none;

  .img-holder {
    background-color: #fff;
    box-shadow: 0 0 10px 5px #ccc;
    border-radius: 5px;
    padding: 5px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    vertical-align: middle;
  }

  a {
    display: inline-block;
  }

  @media (min-width: 960px) {
    display: block;
  }
`;
