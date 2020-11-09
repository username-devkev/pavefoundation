import React from "react";

const ServiceArea = () => {
  const sectionData = [
    {
      icon: "fa fa-microscope",
      title: "Science",
      paragraph: "NEEDS TEXT",
    },
    {
      icon: "fa fa-desktop",
      title: "Technology",
      paragraph: "NEEDS TEXT",
    },
    {
      icon: "fa fa-cogs",
      title: "Engineering",
      paragraph: "NEEDS TEXT",
    },
    {
      icon: "fa fa-paint-brush",
      title: "Arts",
      paragraph: "NEEDS TEXT",
    },
    {
      icon: "fa fa-divide",
      title: "Mathematics",
      paragraph: "NEEDS TEXT ",
    },
  ];
  return (
    <section className="service-area text-center pb-3 pt-3">
      {/* render hearts */}
      {[...Array(11)].map((el, i) => {
        if (i === 0) return;
        return (
          <img
            src={`/images/heart-icon${i}.png`}
            alt={"heart-icon"}
            className={`heart-icon heart-icon-${i}`}
            key={i}
          />
        );
      })}

      {/* Title */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                <img src="/images/section-icon.png" alt="section-icon" />
              </div>
              <h2 className="section__title">
                We prepare African American girls to achieve success in STEAM
              </h2>
            </div>
          </div>
        </div>

        <div className="row service-wrap">
          {sectionData.map((el, i) => {
            return (
              <div className="col-xs-4 col-sm-4 col-lg-3 col-xl-3 mb-2">
                <div className={`service-item service-item${i + 1}`}>
                  <div className="service-item-inner">
                    <div className="service-icon">
                      <i className={el.icon}></i>
                    </div>
                    <div className="service-content">
                      <h4 className="service__title">{el.title}</h4>
                      <p className="service__desc">{el.paragraph}</p>
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

export default ServiceArea;
