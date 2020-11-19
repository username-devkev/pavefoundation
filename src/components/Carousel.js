import React from "react";

export default function Carousel() {
  const data = [
    {
      class: "carousel-item active",
      title: "The Pave Foundation",
      body: "curiosity, self confidence, passion",
      button: "Learn More",
      imgSrc: "/images/slider1.jpg",
      href: "/about",
    },
    {
      class: "carousel-item",
      title: "Giving Tuesday 2020 Fund Drive",
      body: "Help Fund Our Mission",
      button: "Donate",
      imgSrc: "/images/slider2.jpg",
      href: "/events/givingtuesday",
    },
    {
      class: "carousel-item",
      title: "We love Volunteers!",
      body: "Help us organize, educate, and inspire our youth!",
      button: "Sign Up",
      imgSrc: "/images/slider3.jpg",
      href: "/volunteer",
    },
  ];

  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-ride="carousel"
      data-interval={3000}
    >
      {/* <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
      </ol> */}
      <div
        className="carousel-inner "
        style={{ minHeight: "300px", maxHeight: "400px" }}
      >
        {data.map((el, i) => {
          return (
            <div
              className={el.class}
              style={{ minHeight: "300px", height: "100%", maxHeight: "400px" }}
              key={el.button}
            >
              <div
                className="container d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "300px", maxHeight: "400px" }}
              >
                <img
                  className=" carousel__img img-responsive bd-placeholder-img d-block "
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  src={el.imgSrc}
                  alt={el.button}
                  style={{
                    minHeight: "225px",
                    alignSelf: "center",
                    justifySelf: "center",
                  }}
                />
                {/* </div>

              <div className="container"> */}
                <div className="carousel-caption mb-2" style={{}}>
                  <h1 className="carousel__title w-100">{el.title}</h1>
                  <p className="carousel__desc ">{el.body}</p>
                  <p>
                    <a
                      className={i > 0 ? "theme-btn-secondary" : "theme-btn"}
                      href={el.href}
                      role="button"
                    >
                      {el.button}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <a
        className="carousel-control-prev"
        href="#myCarousel"
        data-target="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          data-target="#myCarousel"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        data-target="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          data-target="#myCarousel"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a> */}
    </div>
  );
}
