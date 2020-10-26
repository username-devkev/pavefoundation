import React from 'react';


const Donate = () => {
    return (
        <section className="donate-area2">
            <div className="container">
                <div className="row donate-content-wrap">
                    <div className="col-lg-8">
                        <div className="donate-item">
                            <h3 className="donate__title">Enter Your Donation</h3>
                            <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="yellow-form">
                                                <input type="number" className="form-control" />
                                                    <span className="dollar-sign">$</span>
                                                    <span className="number-symble">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="donate-item">
                            <h3 className="donate__title">Personal Info</h3>
                            <div className="form-shared">
                            <iframe
                    allowpaymentrequest=""
                    frameborder="0"
                    height="600px"
                    name="donorbox"
                    scrolling="no"
                    seamless="seamless"
                    src="https://donorbox.org/embed/kevdev-giving-tuesday"
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      minWidth: "250px",
                      maxHeight: "none!important",
                    }}
                  ></iframe>
                            </div>
                        </div>
                        <div className="donate-item">
                            <h3 className="donate__title">Payment Info</h3>
                            <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Card Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="MM/YY" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Card Code (CVC)" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Billing Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <div className="select-group">
                                                    <select className="select-option">
                                                        <option value="Country">Country</option>
                                                        <option value="usa">Usa</option>
                                                        <option value="Uk">Uk</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="theme-btn submit__btn">donate now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget blog-content">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="/images/img15.jpg" alt="" />
                                    </div>
                                    <div className="blog-inner-content">
                                        <h3 className="blog__title"><a>They Want to Study</a>
                                        </h3>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$30,000</span></li>
                                            <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li>
                                        </ul>
                                        <p className="blog__desc">Raised by 25 donors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="side-widget">
                                <div className="author-box">
                                    <div className="author__avatar">
                                        <img src="/images/author-avatar.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <span className="author__meta">created april 11, 2018</span>
                                        <h4 className="author__title">Organizer: <a href="#">Jessica Smith</a></h4>
                                        <ul className="author__list">
                                            <li><i className="fa fa-tag"></i> Education</li>
                                            <li><i className="fa fa-map-marker"></i> Wrightwood, Canada</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
