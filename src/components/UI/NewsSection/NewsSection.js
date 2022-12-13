import Blogs from "./Blogs";
import News from "./News";
import Video from "./Video";

import {
  NewsSectionContainer,
  VideoContainer,
  TextContainer,
  BottomLinks,
} from "../../styles/NewsSection.styled";

const NewsSection = () => {
  return (
    <>
      <NewsSectionContainer>
        <VideoContainer>
          <Video />
        </VideoContainer>
        <TextContainer>
          <h2>Saveti i vesti</h2>

          <div className="content-wrapper">
            <News />
            <div className="blogs">
              <Blogs />
            </div>
          </div>
        </TextContainer>
      </NewsSectionContainer>
      <BottomLinks>
        <div className="bottom-left-links">
          <a href="#">Podkast</a>
          <a href="#">Auto testovi</a>
        </div>
        <div className="bottom-right-links">
          <a href="#">Pročitaj vest </a>
          <a href="#">Ostali saveti i vesti</a>
        </div>
      </BottomLinks>
    </>
  );
};

export default NewsSection;
