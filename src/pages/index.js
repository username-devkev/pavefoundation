import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import ServiceArea from "../components/ServiceArea";
import HelpingArea from "../components/HelpingArea";
import TeamArea from "../components/TeamArea";
import Carousel from "../components/Carousel";

const HomePage = () => {
  return (
    <Layout pageTitle="Pave Foundation">
      <NavOne />
      <Carousel />

      <ServiceArea />
      <HelpingArea />
      <TeamArea />
      <Footer />
    </Layout>
  );
};

export default HomePage;
