import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  .label-and-checkbox {
    display: flex;
    align-items: center;
  }

  .label-and-checkbox input {
    width: 14px;
    height: 30px;
  }
`;

export const Dimensions = styled.div`
  display: flex;
  flex-direction: column;

  label {
    padding-left: 10px;
  }

  .dimension-options {
    display: flex;
  }

  @media (max-width: 600px) {
    .dimension-options {
      display: block;
    }
  }
`;

export const StateSelection = styled.div`
  width: 66.666%;

  input,
  label {
    margin-left: 10px;
  }
`;
