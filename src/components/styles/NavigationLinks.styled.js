import styled from "styled-components";

export const NavigationLinksHolder = styled.div`
  background-color: #e9e9e9;
  padding: 5px 0 20px 0;
  border-bottom: 1px solid #bfbfbf;
  display: none;

  .links-container ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    gap: 20px;
  }

  .links-container {
    display: flex;
    justify-content: center;
  }

  .links-container a {
    font-size: 14px;
    text-decoration: none;
    color: #444;
    font-weight: 600;
  }

  li {
    position: relative;
  }

  li img {
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    filter: invert(25%) sepia(6%) saturate(42%) hue-rotate(316deg)
      brightness(90%) contrast(86%);
  }

  @media (min-width: 960px) {
    display: flex;
    justify-content: center;
  }
`;
