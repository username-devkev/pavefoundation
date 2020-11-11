import React from "react";

const TeamArea = () => {
  const data = [
    {
      className: "team-item1",
      imgSrc: "/images/team.jpg",
      name: "Gail Tusan Washington",
    },

    {
      className: "team-item2",
      imgSrc: "/images/team8.jpg",
      name: "Joi Hargis",
    },

    {
      className: "team-item1",
      imgSrc: "/images/team5.jpg",
      name: "Michele Mateno",
    },
    {
      className: "team-item3",
      imgSrc: "/images/team6.jpg",
      name: "Desiree Pedescleaux",
    },
    {
      className: "team-item1",
      imgSrc: "/images/team7.jpg",
      name: "Lauren Washington",
    },
    {
      className: "team-item3",
      imgSrc: "/images/team3.jpg",
      name: "Danielle Weekes",
    },
    {
      className: "team-item2",
      imgSrc: "/images/team2.jpg",
      name: "Nicholas Cotten",
    },
    {
      className: "team-item1",
      imgSrc: "/images/team4.jpg",
      name: "Faron Hill",
    },
  ];

  return (
    <section className="team-area text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title h4">Board Members</h2>
            </div>
          </div>
        </div>
        <div className="row team-content-wrap">
          {data.map((el, i) => (
            <div
              className={`team-item ${el.className} col-6 col-sm-6 col-xs-6 col-md-4 col-lg-3 col-xl-3 mb-4`}
            >
              <img src={el.imgSrc} alt="person" className="img-fluid" />
              <div className="team__title d-flex justify-content-center ">
                <h3
                  className="team__title-title  text-align-center"
                  style={{ color: "#fff" }}
                >
                  {el.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
