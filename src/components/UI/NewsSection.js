import vest from "../../img/vest.jpg";
import blog1 from "../../img/blog1_img.jpg";
import blog2 from "../../img/blog2_img.jpg";
import blog3 from "../../img/blog3_img.jpg";

import {
  NewsSectionContainer,
  VideoContainer,
  TextContainer,
  BottomLinks,
} from "../styles/NewsSection.styled";

const NewsSection = () => {
  return (
    <>
      <NewsSectionContainer>
        <VideoContainer>
          <h2>VIDEO</h2>
          <p>
            KIA Sportage - Korejski bestseler iz vašeg komšiluka | Auto Test
            Polovni automobili
          </p>
          <div className="video-wrapper">
            <iframe
              id="u6B17GX0ODw"
              className="ytplayer"
              data-videoid="u6B17GX0ODw"
              data-autoplay="0"
              data-width="320"
              data-height="100%"
              data-playeventlabel="Auto test"
              allowFullScreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="YouTube video player"
              src="https://www.youtube.com/embed/u6B17GX0ODw?enablejsapi=1&amp;origin=https%3A%2F%2Fwww.polovniautomobili.com&amp;widgetid=1"
              width="320"
              height="320"
              frameBorder="0"
            ></iframe>
          </div>
        </VideoContainer>
        <TextContainer>
          <h2>Saveti i vesti</h2>

          <div className="content-wrapper">
            <div className="news">
              <a href="#">
                <img src={vest} />
              </a>
              <p>Black Friday na sajtu Polovni automobili </p>
              <p>
                U okviru Black Friday ponude izdvojili smo specijalnu ponudu
                automobila uz sjajne pogodnosti pri kupovini, poput snižene
                cene, punog rezervoara, seta guma, popusta na veliki i mali
                servis, tehničkog pregleda...
              </p>
            </div>
            <div className="blogs">
              <div className="blog-1">
                <img src={blog1} />
                <p>
                  Ford Kuga Mk3 - Elegancija kao misija | Auto Test Polovni
                  automobili
                </p>
              </div>
              <div className="blog-2">
                <img src={blog2} />
                <p>OMR Luxury Store: Dobro došli u svet luksuza! </p>
              </div>
              <div className="blog-3">
                <img src={blog3} />
                <p>Da li je dozvoljeno parkiranje na trotoaru?</p>
              </div>
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
