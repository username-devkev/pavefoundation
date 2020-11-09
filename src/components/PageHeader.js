import React from "react";

const PageHeader = (props) => {
  return (
    <section
      className="breadcrumb-area pt-3 pb-3"
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content  mt-2 mb-2 pt-4 pb-4">
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
