const WantedCarsList = () => {
  const cars = [
    {
      id: 0,
      name: "Audi a4",
    },
    {
      id: 1,
      name: "Volkswagen Golf 5",
    },
    {
      id: 2,
      name: "BMW Serija 3",
    },
    {
      id: 3,
      name: "Audi A6",
    },
    {
      id: 4,
      name: "Audi A3",
    },
    {
      id: 5,
      name: "Volkswagen Golf 4",
    },
  ];

  return (
    <>
      {cars.map((car) => (
        <a key={car.id} className="wanted-models-item">
          {car.name}
        </a>
      ))}
    </>
  );
};

export default WantedCarsList;
