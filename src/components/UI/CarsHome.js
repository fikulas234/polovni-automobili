import React, { useEffect, useState } from "react";
import axios from "axios";

const CarsHome = () => {
  const [cars, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.polovniautomobili.com/json/v7/getAds?category=26")
      .then((response) => {
        setResult(response.data.payloadData.classifieds);
      });
  }, []);

  return (
    <>
      {cars.map((car) => (
        <section key={car.AdID}>
          <a>
            <div className="card-img-holder">
              <img
                src={
                  car.adImages.basePath +
                  car.adImages.images[0] +
                  "-1920x1080.jpg"
                }
              />
            </div>
            <div className="name-and-price">
              <h3>{car.title}</h3>
              <small>{car.price}</small>
            </div>
          </a>
        </section>
      ))}
    </>
  );
};

export default CarsHome;
