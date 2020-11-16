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
      <PageHeader title="become a volunteer" />
      <div className="mt-5 mb-5"></div>
      <MissionStatement />
      <VolunteerForm />
      <Footer />
    </Layout>
  );
};

export default VolunteerPage;
