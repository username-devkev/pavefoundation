import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Events";

const EventsPage = () => {
  return (
    <Layout pageTitle="Pave Foundation Events">
      <NavOne />
      <PageHeader title="Events" backgroundColor="#27C2C8" />
      <Events />
      <Footer />
    </Layout>
  );
};

export default EventsPage;
