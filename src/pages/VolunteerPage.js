import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import VolunteerForm from "../components/VolunteerForm";
import MissionStatement from "../components/MissionStatement";

const VolunteerPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Volunteer">
      <NavOne />
      <PageHeader title="become a volunteer" backgroundColor="#fdac34" />
      <div className="container">
        <div className="row pt-5">
          <MissionStatement />
          <VolunteerForm />
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default VolunteerPage;
