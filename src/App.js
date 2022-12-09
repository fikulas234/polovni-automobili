import Header from "./components/UI/Header";
import NavigationLinks from "./components/UI/NavigationLinks";
import FilterCard from "./components/UI/FilterCard";
import Footer from "./components/UI/Footer";
import GlobalStyles from "./components/styles/Global";
import CarsHome from "./components/UI/CarsHome";
import ShoppingGuide from "./components/UI/ShoppingGuide";
import { CarsCardsContainer } from "./components/styles/CarsHome.styled";
import { FilterWithPromotion } from "./components/styles/FilterWithPromotion.styled";
import NewsSection from "./components/UI/NewsSection";
import InspiraHeader from "./components/UI/InspiraHeader";
import PromotionBox from "./components/UI/PromotionBox";

import FilterCardParts from "./components/UI/FilterCardParts";

import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [renderComponent, setRenderComponent] = useState(false);
  const [showVehiclesCard, setShowVehiclesCard] = useState(false);
  const [iconIndexMobile, setIconIndexMobile] = useState(0);
  console.log(iconIndexMobile);

  const isPartsClicked = (state) => {
    setRenderComponent(state);
  };

  const breakpoint = 790;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () =>
      window.addEventListener("resize", () => setWidth(window.innerWidth), []);
  });

  return (
    <div className="app">
      <GlobalStyles />
      <Header
        clicked={setShowVehiclesCard}
        vehicleIconMobile={setIconIndexMobile}
      />
      <NavigationLinks />
      {width > breakpoint && <InspiraHeader />}
      <FilterWithPromotion>
        {renderComponent ? (
          <FilterCardParts showVehicles={showVehiclesCard} />
        ) : (
          <FilterCard
            clicked={isPartsClicked}
            showVehicles={showVehiclesCard}
            whichIconMobile={iconIndexMobile}
          />
        )}
        <PromotionBox />
      </FilterWithPromotion>
      <CarsCardsContainer>
        <CarsHome />
      </CarsCardsContainer>
      {width < breakpoint && <InspiraHeader />}
      <NewsSection />
      <ShoppingGuide />
      <Footer />
    </div>
  );
}

export default App;
