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
      imgSrc: "/images/team2.jpg",
      name: "Nicholas Cotten",
    },
    {
      className: "team-item3",
      imgSrc: "/images/team3.jpg",
      name: "Danielle Weekes",
    },
    {
      className: "team-item1",
      imgSrc: "/images/team4.jpg",
      name: "Faron Hill",
    },
    {
      className: "team-item2",
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
      className: "team-item2",
      imgSrc: "/images/team8.jpg",
      name: "Joi Hargis",
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
          {data.map((el) => (
            <div className="col col-lg-3 col-xl-3">
              <div className={`team-item ${el.className}`}>
                <div className="team__img">
                  <img src={el.imgSrc} alt="person" />
                </div>
                <div className="team__title d-flex justify-content-center">
                  <h3 className="team__title-title " style={{ color: "#fff" }}>
                    {el.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
