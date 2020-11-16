import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Contact">
      <NavOne />
      <PageHeader title="Contact" />

      <Footer />
    </Layout>
  );
};

export default ContactPage;
