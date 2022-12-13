const HamburgerNavLinksItems = () => {
  const links = [
    {
      id: 0,
      text: "Naslovna",
    },
    {
      id: 1,
      text: "Postavi oglas",
    },
    {
      id: 2,
      text: "Moj profil",
    },
    {
      id: 3,
      text: "Sacuvane pretrage",
    },
    {
      id: 4,
      text: "Ponuda za oglasavanje",
    },
    {
      id: 5,
      text: "Usluge i krediti",
    },
    {
      id: 6,
      text: "Prodajem",
    },
    {
      id: 7,
      text: "Brza pretraga",
    },
    {
      id: 8,
      text: "Saveti, vesti, video",
    },
    {
      id: 9,
      text: "Auto osiguranje",
    },
    {
      id: 10,
      text: "Moja garaza",
    },
  ];

  return links.map((link) => (
    <li key={link.id}>
      <a>{link.text}</a>
    </li>
  ));
};

export default HamburgerNavLinksItems;
