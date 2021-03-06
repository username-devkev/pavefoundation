import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import HelpingArea from "../components/HelpingArea";

export default function DonatePage() {
  return (
    <Layout>
      <NavOne />
      <PageHeader title="Donate" backgroundColor="#5eace7" />
      <HelpingArea />
      <Footer />
    </Layout>
  );
}
