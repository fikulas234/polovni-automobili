import styled from "styled-components";

export const PartsHolder = styled.div`
  font-size: 14px;
  border: 1px solid #b4b4b4;
  border-radius: 0 0 5px 5px;
  padding-bottom: 40px;
  max-width: 800px;

  .filter-input-holder {
    padding: 10px 10px;
  }

  .filter-input-holder input {
    display: inline-block;
    height: 30px;
    width: 100%;
    padding: 4px 30px 4px 8px;
    border: 1px solid #b4b4b4;
    border-radius: 5px;
  }

  .first-row,
  .second-row {
    display: flex;
  }

  .input-with-checkbox {
    width: 66.666%;
  }

  .input-and-checkbox {
    display: flex;
    align-items: center;
    margin-top: 3px;
  }

  .input-and-checkbox input {
    display: inline-block;
    width: 14px;
    height: 14px;
  }

  .label-and-checkbox input {
    width: 14px;
    height: 14px;
  }

  .search-btn-holder {
    display: flex;
    justify-content: end;
    padding-right: 10px;
  }

  .search-btn-holder button {
    display: block;
    width: 180px;
    height: 30px;
    padding: 4px 10px;
    background-color: #f1b905;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }

  .tires-inputs {
    width: 66.666%;
  }

  @media (max-width: 600px) {
    width: 100%;
    background-color: #e9e9e9;

    .first-row,
    .second-row {
      display: block;
    }
    .input-with-checkbox {
      width: 100%;
    }

    .search-btn-holder {
      justify-content: center;
    }
  }
`;
