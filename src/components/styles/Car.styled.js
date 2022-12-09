import styled from "styled-components";

export const CarsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  border: 1px solid #b4b4b4;
  border-radius: 0 0 5px 5px;
  padding-bottom: 40px;

  .filter-input-holder {
    width: 33.333%;
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

  .row {
    display: flex;
    justify-content: space-between;
  }

  .car-age {
    display: flex;
    gap: 20px;
  }

  .car-age input {
    width: 50%;
  }

  .search-btn-holder {
    display: flex;
    justify-content: end;
  }

  .search-button {
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

  .checkboxes-container {
    width: 33.333%;
    padding: 0 10px;
    display: flex;
    justify-content: start;
  }

  .checkboxes-container .input-checkbox {
    width: 50%;
  }

  .input-checkbox {
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .recent-ads {
    padding: 0 10px;
  }

  .recent-ads a {
    display: inline-block;
    line-height: 50px;
    padding: 10px 0;
    color: #39f;
  }

  .advanced-search {
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 10px;
  }

  .detailed-search-btn {
    height: 30px;
    width: 180px;
    padding: 4px 10px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .fifth-row {
    padding: 10px;
  }

  .new-cars a {
    text-decoration: none;
    color: #39f;
  }

  .save-your-search p {
    font-size: 14px;
    line-height: 30px;
  }

  .save-search-btn {
    height: 30px;
    width: 180px;
    padding: 4px 10px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #f1a41a;
    background-color: #fff;
    border: 1px solid #f1a41a;
  }

  .saved-searches {
    width: 180px;
  }

  .saved-searches button:hover {
    color: #fff;
    background-color: #f1a41a;
  }

  .filter-input-holder.hidden {
    display: none;
  }

  .motor-power.hidden {
    display: none;
  }

  .motor-power {
    display: flex;
    gap: 20px;
  }

  .hidden {
    display: none;
  }

  @media (max-width: 600px) {
    background-color: #e9e9e9;
    border-radius: 5px 5px 5px 5px;

    .row {
      display: block;
    }

    .filter-input-holder {
      width: 100%;
    }
    .search-button {
      width: 100%;
    }

    .advanced-search {
      width: 100%;
      padding: 0 10px;
    }

    .advanced-search button {
      width: 100%;
    }

    .saved-searches {
      padding: 0 10px;
      width: 100%;
    }

    .saved-searches button {
      width: 100%;
    }

    .new-cars {
      padding-left: 10px;
      margin-bottom: 10px;
    }

    .new-vehicles {
      padding-left: 10px;
    }

    .new-vehicles a {
      padding: 0;
    }
  }
`;
