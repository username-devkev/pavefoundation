import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Donate from "../components/Donate";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import EventsDetail from "../components/EventsDetail";

export default function EventsDetailPage({
  eventName,
  backgroundColor,
  month,
  day,
  year,
  imgSrc,
  title,
  paragraphOne,
  paragraphTwo,
  formComponent,
  blogTag,
}) {
  return (
    <Layout>
      <NavOne />
      <PageHeader title={eventName} backgroundColor={backgroundColor} />
      <section className="event-detail-area pt-2 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-content" style={{ minHeight: "200px" }}>
                <div className="blog-item h-100">
                  <div
                    className="blog-img img-fluid"
                    style={{ minHeight: "200px" }}
                  >
                    <img
                      src={imgSrc}
                      alt={title}
                      className="img-fluid"
                      style={{ minHeight: "200px" }}
                    />
                    <span className={`blog__tag blog__tag${blogTag}`}>
                      <span className="date__num-text">{day}</span>
                      <span className="date__mon-text">{month}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="event-detail-content col-lg-6">
              <div className="event-detail-item">
                <h3 className="event__title">{title}</h3>
                <p className="event__text">{paragraphOne}</p>
                <p className="event__text">{paragraphTwo}</p>
              </div>
            </div>

            <Donate />
          </div>
        </div>
      </section>
      {formComponent}
      <Footer />
    </Layout>
  );
}
