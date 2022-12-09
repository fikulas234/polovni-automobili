import React from "react";

const FooterQuickLinks = () => {
  const links = [
    {
      id: 0,
      text: "Procena vozila",
    },
    {
      id: 1,
      text: "Sigurna kupovina polovnih automobila bez prevare",
    },
    {
      id: 2,
      text: "Oglasi na Email",
    },
    {
      id: 3,
      text: "Knjiga utisaka",
    },
    {
      id: 4,
      text: "Prednosti oglašavanja",
    },
    {
      id: 5,
      text: "Česta pitanja",
    },
    {
      id: 6,
      text: "Digitalno oglašavanje",
    },
    {
      id: 7,
      text: "O nama",
    },
    {
      id: 8,
      text: "Uslovi korišćenja",
    },
    {
      id: 9,
      text: "Obaveštenje o privatnosti",
    },
    {
      id: 10,
      text: "Pružaš auto usluge",
    },
    {
      id: 11,
      text: "Mobilne aplikacije",
    },
    {
      id: 12,
      text: "Prijatelji sajta",
    },
  ];

  return (
    <>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a>{link.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterQuickLinks;
