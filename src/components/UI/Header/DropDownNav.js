const DropDownNav = () => {
  const navLinks = [
    {
      id: 0,
      text: "Aktivni oglasi",
      href: "#",
    },
    {
      id: 1,
      text: "Neaktivni oglasi",
      href: "#",
    },
    {
      id: 2,
      text: "Poruke",
      href: "#",
    },
    {
      id: 3,
      text: "Potencijalni kupci",
      href: "#",
    },
    {
      id: 4,
      text: "Oglasi koje pratim",
      href: "#",
    },
    {
      id: 5,
      text: "Sacuvane pretrage",
      href: "#",
    },
    {
      id: 6,
      text: "Obavestenja",
      href: "#",
    },
    {
      id: 7,
      text: "Podesavanja",
      href: "#",
    },
    {
      id: 8,
      text: "Krediti",
      href: "#",
    },
    {
      id: 9,
      text: "Prijavi se",
      href: "#",
    },
  ];

  return (
    <>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropDownNav;
