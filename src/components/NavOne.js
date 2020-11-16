import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavOne() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //Mobile Menu
    mobileMenu();
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100 && window.scrollY < 800) {
      setSticky(true);
    } else if (window.scrollY < 100) {
      setSticky(false);
    } else if (window.scrollY > 800) {
      setSticky(false);
    }
  };

  const mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".mobile-menu-toggle");
    let mainNav = document.querySelector(".side-nav-container");

    mainNavToggler.addEventListener("click", function () {
      mainNav.classList.add("active");
    });

    //Close Mobile Menu
    let closeMenu = document.querySelector(".side-menu-close");
    closeMenu.addEventListener("click", function () {
      mainNav.classList.remove("active");
    });
  };

  return (
    <div>
      <header className="header-area">
        <div className="header-top-action">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="top-action-content info-action-content">
                  <div className="info-box info-box-2 d-flex align-items-stretch justify-content-around">
                    <ul className="top-action-list d-flex align-items-stretch">
                      <li>
                        <a href="/" style={{ textTransform: "lowercase" }}>
                          <i className="fa fa-envelope"></i>
                          thepavefoundation@gmail.com
                        </a>
                      </li>
                    </ul>
                    <ul className="top-action-list d-flex align-items-stretch">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/THEPAVEFOUNDAT1?s=09"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/pg/thepavefoundation/events/"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/thepavefoundation/"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`header-top header-menu-action ${
            sticky ? "header-fixed" : ""
          }`}
        >
          <div className="container">
            <div className="row ostion-top-wrap">
              <div className="col-lg-5 col-sm-5 site-branding">
                <div className="logo-action d-flex align-items-center">
                  <div className="ostion-logo">
                    <div href="/">
                      <Link className="navbar-brand" to="/">
                        <img
                          className="navbar__logo img-fluid"
                          src="/images/logo3.png"
                          alt="Pave Foundation Logo"
                          title="Pave Foundation Logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="header-btn ml-auto">
                    <div>
                      <a
                        className="theme-btn"
                        href="/#donorbox"
                        style={{ color: "white" }}
                      >
                        donate now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-sm-7 ostion-menu">
                <div className="ostion-menu-innner">
                  <div className="ostion-menu-content">
                    <div className="navigation-top">
                      <nav className="main-navigation">
                        <ul>
                          <li className="active">
                            <Link to="/">Home</Link>
                          </li>

                          <li>
                            <Link to="/events">Events</Link>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/events/givingtuesday">
                                  Giving Tuesday Fund Drive{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/events/2021camp">2021 Camp</Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to="#">Get Involved</Link>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/donate">Donate </Link>
                              </li>
                              <li>
                                <Link to="/volunteer">Volunteer</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="#">explore</Link>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/explore/gallery">Gallery </Link>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/about">About</Link>
                            <ul className="dropdown-menu-item">
                              <li>
                                <Link to="/about#aboutMission">Mission </Link>
                              </li>
                              <li>
                                <Link to="/about#aboutTeam">Team</Link>
                              </li>
                              <li>
                                <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="mobile-menu-toggle ">
                    <i className="fa fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-nav-container">
          <div className="humburger-menu">
            <div className="humburger-menu-lines side-menu-close"></div>
          </div>
          <div className="side-menu-wrap">
            <ul className="side-menu-ul">
              <li className="sidenav__item">
                <Link to="/">Home</Link>
              </li>

              <li className="sidenav__item">
                <Link to="/events">Events</Link>
                <ul className="side-sub-menu">
                  <li>
                    <Link to="/events/givingtuesday">
                      Giving Tuesday Fund Drive
                    </Link>
                  </li>
                  <li>
                    <Link to="/events/2021camp">2021 Camp</Link>
                  </li>
                </ul>
              </li>

              <li className="sidenav__item">
                <Link to="/">Get Involved</Link>

                <ul className="side-sub-menu">
                  <li>
                    <Link to="/donate">Donate</Link>
                  </li>

                  <li>
                    <Link to="/volunteer">Volunteer</Link>
                  </li>
                </ul>
              </li>

              <li className="sidenav__item">
                <Link to="/about">About</Link>

                <ul className="side-sub-menu">
                  <li>
                    <Link to="/about#aboutMission">Mission</Link>
                  </li>
                  <li>
                    <Link to="/about#aboutTeam"> Team</Link>
                  </li>
                </ul>
              </li>

              <li className="sidenav__item">
                <Link to="#">Explore</Link>
                <ul className="side-sub-menu">
                  <li>
                    <Link to="/explore/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/explore/contact">Contact</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="side-social">
              <li>
                <a href="https://www.facebook.com/pg/thepavefoundation/events/">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/THEPAVEFOUNDAT1?s=09">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/THEPAVEFOUNDAT1?s=09">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
            <div className="side-btn">
              <div href="/donate">
                <a className="theme-btn" href="/donate">
                  donate now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavOne;
