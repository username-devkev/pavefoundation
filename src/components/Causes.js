import React from "react";
import Link from "next/link";

const Causes = () => {
  return (
    <section className="causes-area causes-area2">
      <div className="container">
        <div className="row blog-content-wrap">
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item1">
                <div className="blog-img">
                  <img src="/images/img1.jpg" alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link className="theme-btn" href="/causes-detail">
                      Save Poor Childrens
                    </Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link className="theme-btn" href="/donate">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item2">
                <div className="blog-img">
                  <img src="/images/img2.jpg" alt="" />
                  <span className="blog__tag">
                    <i className="fa fa-flash"></i> trending
                  </span>
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link className="theme-btn" to="/causes-detail">
                      They Want to Study
                    </Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link className="theme-btn" href="/donate">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item3">
                <div className="blog-img">
                  <img src="/images/img3.jpg" alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link className="theme-btn" to="/causes-detail">
                      Healthy Food for All
                    </Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link className="theme-btn" href="/donate">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item4">
                <div className="blog-img">
                  <img src="/images/img10.jpg" alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link className="theme-btn" href="/causes-detail">
                      Need Educations
                    </Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link className="theme-btn" href="/donate">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item1">
                <div className="blog-img">
                  <img src="/images/img2.jpg" alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link className="theme-btn" href="/causes-detail">
                      Clean Water Issues
                    </Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link className="theme-btn" href="/donate">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-content">
              <div className="blog-item blog-item2">
                <div className="blog-img">
                  <img src="/images/img11.jpg" alt="" />
                </div>
                <div className="blog-inner-content">
                  <h3 className="blog__title">
                    <Link className="theme-btn" href="/causes-detail">
                      Help the Eco System
                    </Link>
                  </h3>
                  <p className="blog__desc">
                    Aliq is notm hendr erit a augue insu image pellen tes.
                  </p>
                  <ul className="blog__list">
                    <li>
                      <i className="icon-target"></i> Goal: <span>$30,000</span>
                    </li>
                    <li>
                      <i className="fa fa-line-chart"></i> Raised:{" "}
                      <span>25,270</span>
                    </li>
                  </ul>
                  <Link className="theme-btn" href="/donate">
                    donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Causes;
