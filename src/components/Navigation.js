import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 540);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 540);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const menuItems = [
    {
      index: "00",
      name: "Home",
      link: "/",
    },
    {
      index: "01",
      name: "Destination",
      link: "/destination",
    },
    {
      index: "02",
      name: "Crew",
      link: "/crew",
    },
    {
      index: "03",
      name: "Technology",
      link: "/technology",
    },
  ];

  return (
    <div className="navigation">
      <div className="logo">
        <img
          src="/spaseTourismWebsite/shared/logo.svg"
          alt="logo"
          className="logoImg"
        />
      </div>
      <div className="hamburgerBox" onClick={toggleMenu}>
        {!isMenuOpen ? (
          <div className="hamburgerMenu">
            <img
              className="hamburgerMenuIcon"
              src="/spaseTourismWebsite/shared/icon-hamburger.svg"
              alt="hamburgerMenu"
            />
          </div>
        ) : (
          <div className="hamburgerClose">
            <img
              className="hamburgerCloseIcon"
              src="/spaseTourismWebsite/shared/icon-close.svg"
              alt="hamburgerMenu"
            />
          </div>
        )}
      </div>

      {(isDesktop || isMenuOpen) && (
        <nav className="nav">
          <ul className="navList">
            {menuItems.map((item, index) => (
              <li key={index} className="navItem">
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? "navLink active" : "navLink"
                  }
                >
                  <span className="navIndex">{item.index}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
