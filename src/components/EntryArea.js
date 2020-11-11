import React, { Component } from "react";
import ModalVideo from "react-modal-video";

class EntryArea extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <section className="entry-area">
        <div className="container">
          <div className="row entry-static-wrap">
            <div className="col-lg-3">
              <div className="entry-static-box entry-static-box1">
                <div className="section-icon">
                  <img src="/images/section-icon.png" alt="section-icon" />
                </div>
                <h4 className="entry__title">Our Mission</h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="entry-static-box entry-static-box2 d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-12">
                    <h4
                      className="entry__title"
                      style={{
                        color: "#000000",
                        fontSize: "28px",
                        lineHeight: "32zpx",
                      }}
                    >
                      We are committed to “paving the way” for African American
                      girls to achieve success in STEAM{" "}
                      <span style={{ fontWeight: 200 }}>
                        (Science, Technology, Engineering, Arts and
                        Mathematics).
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EntryArea;
