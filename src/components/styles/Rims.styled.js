import styled from "styled-components";

export const Types = styled.div`
  .rims-inputs {
    display: flex;
  }

  label {
    width: 25%;
  }

  .label-and-checkbox input {
    width: 14px;
    height: 14px;
  }

  .label-and-checkbox label {
    padding-left: 5px;
  }

  .label-and-checkbox {
    width: 25%;
  }

  @media (max-width: 600px) {
    .rims-inputs {
      flex-direction: column;
    }

    .label-and-checkbox {
      display: flex;
      width: 100%;
    }
  }
`;
