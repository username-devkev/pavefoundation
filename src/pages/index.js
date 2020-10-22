import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
// import EntryArea from "../components/EntryArea";
// import HiwArea from "../components/HiwArea";
import ServiceArea from "../components/ServiceArea";
// import MixerArea from "../components/MixerArea";
// import CausesArea from "../components/CausesArea";
// import ClientsLogo from "../components/ClientsLogo";
import HelpingArea from "../components/HelpingArea";
import TeamArea from "../components/TeamArea";
import CallToAction from "../components/CallToAction";
import HiwArea from "../components/HiwArea";
import EntryArea from "../components/EntryArea";
// import BlogHome from "../components/BlogHome";
// import Map from "../components/Map";
import CallToActionTwo from "../components/CallToActionTwo";
import VolunteerForm from "../components/VolunteerForm";

const HomePage = () => {
  return (
    <Layout pageTitle="Pave Foundation">
      <NavOne />
      <SliderOne />
      {/* <EntryArea /> */}
      {/* <HiwArea /> */}
      <ServiceArea />
      {/* <HiwArea /> */}
      {/* <ClientsLogo /> */}
      <HelpingArea />
      <TeamArea />
      {/* <CallToAction /> */}
      {/* <CallToActionTwo /> */}
      <Footer />
    </Layout>
  );
};

export default HomePage;
