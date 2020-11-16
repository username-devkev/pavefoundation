import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import TeamArea from "../components/TeamArea";

const TeamPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Team">
      <NavOne />
      <PageHeader title="Our Team" />

      <TeamArea />
      <Footer />
    </Layout>
  );
};

export default TeamPage;
