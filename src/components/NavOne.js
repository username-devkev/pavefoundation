import React, { Component } from "react";

class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
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

  render() {
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
                          <a href="#">
                            <i className="fa fa-envelope"></i>
                            info@pavefoundation.org
                          </a>
                        </li>
                      </ul>
                      <ul className="top-action-list d-flex align-items-stretch">
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
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
              this.state.sticky ? "header-fixed" : ""
            }`}
          >
            <div className="container">
              <div className="row ostion-top-wrap">
                <div className="col-lg-5 col-sm-5 site-branding">
                  <div className="logo-action d-flex align-items-center">
                    <div className="ostion-logo">
                      <div href="/">
                        <a>
                          <img
                            src="/images/logo.png"
                            alt="Pave Foundation Logo"
                            title="Pave Foundation Logo"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="header-btn ml-auto">
                      <div href="/donate">
                        <a className="theme-btn" style={{ color: "white" }}>
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
                              <div href="/">
                                <a href="/">Home</a>
                              </div>
                            </li>

                            <li>
                              <a href="#">events</a>
                            </li>

                            <li>
                              <a href="#">About Us</a>
                              <ul className="dropdown-menu-item">
                                <li>
                                  <div href="/about">
                                    <a>About</a>
                                  </div>
                                </li>
                                <li>
                                  <div href="/gallery">
                                    <a>Gallery</a>
                                  </div>
                                </li>
                                <li>
                                  <div href="/team">
                                    <a>Our Team</a>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div href="/contact">
                                <a>contact</a>
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="mobile-menu-toggle">
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
                  <a href="/">home</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li>
                      <div href="/">
                        <a>Home 1</a>
                      </div>
                    </li>
                    <li>
                      <div href="/index2">
                        <a>Home 2</a>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="sidenav__item">
                  <a href="#">causes</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li>
                      <div href="/causes">
                        <a>causes</a>
                      </div>
                    </li>
                    <li>
                      <div href="/causes-detail">
                        <a>causes detail</a>
                      </div>
                    </li>
                    <li>
                      <div href="/donate">
                        <a>donate now</a>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="sidenav__item">
                  <a href="#">event</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li>
                      <div href="/events">
                        <a>events</a>
                      </div>
                    </li>
                    <li>
                      <div href="/events-detail">
                        <a>events detail</a>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="sidenav__item">
                  <a href="#">news</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li>
                      <div href="/news">
                        <a>news</a>
                      </div>
                    </li>
                    <li>
                      <div href="/single-news">
                        <a>news detail</a>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="sidenav__item">
                  <a href="#">pages</a>
                  <span className="menu-plus-icon"></span>
                  <ul className="side-sub-menu">
                    <li>
                      <div href="/about">
                        <a>about</a>
                      </div>
                    </li>
                    <li>
                      <div href="/gallery">
                        <a>gallery</a>
                      </div>
                    </li>
                    <li>
                      <div href="/volunteer">
                        <a>become a volunteer</a>
                      </div>
                    </li>
                    <li>
                      <div href="/team">
                        <a>our team</a>
                      </div>
                    </li>
                    <li>
                      <div href="/sponsor">
                        <a>sponsors</a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="sidenav__item">
                  <div href="/contact">
                    <a>contact</a>
                  </div>
                </li>
              </ul>
              <ul className="side-social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
              </ul>
              <div className="side-btn">
                <div href="/donate">
                  <a className="theme-btn">donate now</a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavOne;
