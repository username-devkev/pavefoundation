import React from "react";

const Events = () => {
  const eventsData = [
    {
      month: "Dec 2020",
      day: "1",
      imgSrc: "/images/slider2.jpg",
      linkHref: "/events/givingtuesday",
      linkTitle: "2020 Giving Tuesday Fund Drive",
      dateDetails: "All Day Virtual Event",
      location: " Online",
    },
    {
      month: "June 2021",
      day: "26",
      imgSrc: "/images/slider1.jpg",
      linkHref: "/events/2021camp",
      linkTitle: "2021 Atlanta STEAM Camp",
      dateDetails: "Late June 2021",
      location: " Atlanta, GA",
    },
  ];
  return (
    <section className="causes-area upcoming-event-area upcoming-event-area2 pt-2 pb-2">
      <div className="container">
        <div className="row blog-content-wrap">
          {/* EVENTS DATA  */}
          {eventsData.map((el, i) => {
            return (
              <div className="col-lg-4">
                <div className="blog-content">
                  <div className={`blog-item blog-item${i + 1}`}>
                    <div className="blog-img">
                      <img src={el.imgSrc} alt={el.linkTitle} />
                      <span
                        className={`blog__tag blog__tag${i + 1}`}
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
                        <li className="blog__dot-active"> {el.dateDetails}</li>
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
