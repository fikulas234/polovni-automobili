import styled from "styled-components";

export const NewsSectionContainer = styled.div`
  padding: 20px 10px;
  background-color: #e9e9e9;

  @media (min-width: 768px) {
    display: flex;
  }
`;
export const VideoContainer = styled.div`
  text-align: center;

  iframe {
    width: 100%;
    padding: 0 10px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 15px;
    color: #444;
  }

  p {
    color: #444;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    width: 50%;

    h2 {
      text-align: left;
    }

    p {
      text-align: left;
    }

    iframe {
      padding: 0;
    }
  }
`;
export const TextContainer = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  .content-wrapper {
    display: flex;
  }

  .news {
    width: 50%;
    padding-left: 15px;
  }

  .news img {
    width: 100%;
    height: auto;
    padding: 0 20px;
  }

  .news p {
    margin: 15px 0;
    color: #39f;
    font-size: 14px;
    padding-left: 15px;
  }

  .news p:nth-child(2) {
    width: 80%;
  }

  .news p:nth-child(3) {
    color: #444;
  }

  .blogs {
    width: 50%;
  }

  .blogs img {
    width: 33.333%;
    height: auto;
  }

  .blogs p {
    width: 66.666%;
    padding-left: 25px;
    color: #39f;
  }

  .blog-1,
  .blog-2,
  .blog-3 {
    display: flex;
    margin-left: 25px;
    padding-bottom: 15px;
  }

  .blog-1,
  .blog-2 {
    border-bottom: 1px solid #999999;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    width: 50%;

    h2 {
      text-align: left;
    }
  }
`;
export const BottomLinks = styled.div`
  display: flex;
  background-color: #e9e9e9;
  padding-bottom: 20px;

  .bottom-left-links {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
  }

  .bottom-right-links {
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 20px;
  }

  a {
    width: 50%;
    font-size: 14px;
    text-decoration: none;
    color: #39f;
    cursor: pointer;
  }

  a:nth-child(2),
  a:nth-child(4) {
    text-align: right;
  }
`;
