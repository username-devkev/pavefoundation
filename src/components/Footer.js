import React, { Component } from "react";
import NewsletterForm from "../components/NewsletterForm";
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        scrollBtn: true,
      });
    } else if (window.scrollY < 100) {
      this.setState({
        scrollBtn: false,
      });
    }
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <section className="footer-area p-0">
          <div className="newsletter-area  ml-2">
            <div className="container" style={{ height: "200px" }}>
              <div className="row h-100">
                <NewsletterForm />
              </div>
            </div>
          </div>
          <div className="footer-top mt-5 p-0 pt-5">
            <div className="container">
              <div className="row footer-widget-wrap">
                <div className="col footer-item footer-item1">
                  <h3 className="widget__title">Events</h3>
                  <ul className="foot__links">
                    <li>
                      <a href="/events/givingtuesday">
                        Giving Tuesday Fund Drive
                      </a>
                    </li>
                    <li>
                      <a href="/events/2021">2021 Camp</a>
                    </li>
                  </ul>
                </div>
                <div className="col footer-item footer-item2">
                  <h3 className="widget__title">Get Involved</h3>
                  <ul className="foot__links">
                    <li>
                      <a href="/donate">Donate</a>
                    </li>
                    <li>
                      <a href="/volunteer">Volunteer</a>
                    </li>
                  </ul>
                </div>
                <div className="col footer-item footer-item3">
                  <h3 className="widget__title">About</h3>
                  <ul className="foot__links">
                    <li>
                      <a href="/about">Mission</a>
                    </li>
                    <li>
                      <a href="/team">Team</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="col footer-item footer-item4">
                  <h3 className="widget__title">Contact</h3>
                  <ul className="contact__info">
                    <li>P.O. Box 19572 Atlanta, GA 30325</li>
                    <li>
                      <a href="mailto:info@pavefoundation.org">
                        info@pavefoundation.org
                      </a>
                    </li>
                    {/* <li>
                      <a href="tel:6668880000">666 888 0000</a>
                    </li> */}
                  </ul>
                  <div className="footer__social pt-2 pb-2">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/THEPAVEFOUNDAT1?s=09"
                          alt="twitter"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/pg/thepavefoundation/events/"
                          alt="facebook"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/thepavefoundation/"
                          alt="instagram"
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
        </section>

        <div
          onClick={this.scrollTop}
          id="back-to-top"
          className={this.state.scrollBtn ? "back-btn-shown" : ""}
        >
          <i className="fa fa-angle-up" title="Go top"></i>
        </div>
      </div>
    );
  }
}

export default Footer;
