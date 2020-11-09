import React from "react";

const PageHeader = (props) => {
  return (
    <section
      className="breadcrumb-area"
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <h2 className="breadcrumb__title" style={{ color: "#ffffff" }}>
                {props.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
