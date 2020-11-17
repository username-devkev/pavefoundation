import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <Layout pageTitle="Oxpitan | Contact">
      <NavOne />
      <PageHeader title="Contact" backgroundColor="#5caae8" />
      <div className="container">
        <div className="row"></div>
      </div>
      <Footer />
    </Layout>
  );
};

export default ContactPage;
