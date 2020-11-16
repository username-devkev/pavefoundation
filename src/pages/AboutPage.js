import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import TeamArea from "../components/TeamArea";
import MissionStatement from "../components/MissionStatement";

// import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <Layout pageTitle="Oxpitan | About">
      <NavOne />
      <PageHeader title="About" backgroundColor="#5eace7" />
      <div className="container">
        <div id="aboutMission" className="row mt-3">
          <div className="col-3">
            <img src="/images/gallery-img7.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-3 ">
            <img src="/images/gallery-img6.jpg" alt="" className="img-fluid" />
          </div>
          <MissionStatement />
        </div>

        <div id="aboutTeam" className="row">
          <TeamArea />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
