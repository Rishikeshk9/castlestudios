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
                    <img alt="logo" src="assets/img/logo.svg" />
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
                      <img alt="logo" src="assets/img/logo.svg" />
                    )}
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link legacyBehavior href="about">
                  Pages
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="about">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="team">
                      team
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="pricing">
                      pricing
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="404error">
                      404 error
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="portfolio-grid">
                  Portfolio
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="portfolio-grid">
                      portfolio grid
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-masonry">
                      portfolio masonry
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-metro">
                      portfolio metro
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-single-v1">
                      portfolio single v1
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="portfolio-single-v2">
                      portfolio single v2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="blog-grid">
                  Blog
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="blog-grid">
                      blog grid
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-single-post">
                      blog single post 1
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog-single-post-2">
                      blog single post 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link legacyBehavior href="contacts">
                  contacts
                </Link>
              </li> */}
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
