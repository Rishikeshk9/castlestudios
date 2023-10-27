import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { background: "transparent" }
      }
    >
      <div className="container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <img alt="logo" src="assets/img/logo-full.svg" />
                  ) : (
                    <img alt="logo" src="assets/img/logo-full.svg" />
                  )}
                </a>
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link legacyBehavior href="/">
                  <a>
                    {blackLogo ? (
                      <img
                        alt="logo"
                        height={100}
                        style={{ width: "100%", margin: "0 0 30px 0" }}
                        src="assets/img/logo-full.svg"
                      />
                    ) : (
                      <img alt="logo" src="assets/img/logo-full.svg" />
                    )}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link legacyBehavior href="#contact-section">
              <a className="themebtu">Get Started</a>
            </Link>
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};
export default Header;
