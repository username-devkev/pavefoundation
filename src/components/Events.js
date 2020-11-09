import React from "react";

const Events = () => {
  const eventsData = [
    {
      month: "Dec",
      day: "1",
      backgroundColor: "",
      imgSrc: "/images/slider1.jpg",
      linkHref: "/givingtuesday",
      linkTitle: "2020 Giving Tuesday Fund Drive",
      dateDetails: "All Day Virtual Event",
      location: "Online",
    },
    {
      month: "june",
      month: "Dec",
      day: "1",
      backgroundColor: "",
      imgSrc: "/images/slider2.jpg",
      linkHref: "/2021camp",
      linkTitle: "2021 STEAM Camp",
      dateDetails: "Late June 2021",
      location: "Atlanta, GA",
    },
  ];
  return (
    <section className="causes-area upcoming-event-area upcoming-event-area2">
      <div className="container">
        <div className="row blog-content-wrap">
          {eventsData.map((el, i) => {
            return (
              <div className="col-lg-4">
                <div className="blog-content">
                  <div className="blog-item blog-item1">
                    <div className="blog-img">
                      <img src={el.imgSrc} alt={el.linkTitle} />
                      <span
                        className="blog__tag blog__tag1"
                        style={{ backgroundColor: el.backgroundColor }}
                      >
                        <span className="date__mon-text">{el.month}</span>
                        <span className="date__num-text">{el.day}</span>
                      </span>
                    </div>
                    <div className="blog-inner-content">
                      <h3 className="blog__title">
                        <a href={el.linkHref}>{el.linkTitle}</a>
                      </h3>
                      <ul className="blog__list">
                        <li className="blog__dot-active">{el.dateDetails}</li>
                        <li>{el.location}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
