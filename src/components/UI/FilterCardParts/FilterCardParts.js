import AutoParts from "../../FilterCardComponent/PartsComponents/AutoParts";
import AutoEquipment from "../../FilterCardComponent/PartsComponents/AutoEquipment";
import Tires from "../../FilterCardComponent/PartsComponents/Tires";
import Rims from "../../FilterCardComponent/PartsComponents/Rims";
import MotoParts from "../../FilterCardComponent/PartsComponents/MotoParts";
import TruckParts from "../../FilterCardComponent/PartsComponents/TruckParts";
import TractorParts from "../../FilterCardComponent/PartsComponents/TractorParts";
import HeavyMachinesParts from "../../FilterCardComponent/PartsComponents/HeavyMachinesParts";
import VesselsParts from "../../FilterCardComponent/PartsComponents/VesselsParts";
import BikeParts from "../../FilterCardComponent/PartsComponents/BikeParts";

import { VehiclesCard, VehiclesHolder } from "../../styles/FilterCard.styled";
import { useState, useEffect } from "react";

import FilterCardPartsLinks from "./FilterCardPartsLinks";

const FilterCardParts = (props) => {
  const [index, setIndex] = useState(0);
  const [partsCardClass, setPartsCardClass] = useState(false);

  useEffect(() => {
    setPartsCardClass(props.showVehicles);
  }, [props.showVehicles]);

  const whichComponent = (id) => {
    setIndex(id);
  };

  const components = [
    {
      component: <AutoParts />,
      title: "Auto delovi",
    },
    {
      component: <AutoEquipment />,
      title: "Auto oprema i kozmetika",
    },
    {
      component: <Tires />,
      title: "Gume",
    },
    {
      component: <Rims />,
      title: "Felne i ratkapne",
    },
    {
      component: <MotoParts />,
      title: "Moto oprema i delovi",
    },
    {
      component: <TruckParts />,
      title: "Kombi delovi i oprema",
    },
    {
      component: <TractorParts />,
      title: "Delovi za traktore",
    },
    {
      component: <HeavyMachinesParts />,
      title: "Delovi za bagere, viljuškare i radne mašine",
    },
    {
      component: <VesselsParts />,
      title: "Oprema i delovi za čamce, brodove i ostala plovila",
    },
    {
      component: <BikeParts />,
      title: "Delovi i oprema za bicikle",
    },
  ];

  return (
    <VehiclesCard>
      <h1>{components[index].title}</h1>
      <VehiclesHolder>
        <div
          className={`parts-wrapper ${partsCardClass ? "visible" : "hidden"}`}
        >
          <div className="vehicles-icons">
            <FilterCardPartsLinks componentID={whichComponent} />
          </div>
          {components[index].component}
        </div>
      </VehiclesHolder>
    </VehiclesCard>
  );
};

export default FilterCardParts;
