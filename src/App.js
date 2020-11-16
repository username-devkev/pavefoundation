import React from "react";
//react router
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import EventsDetailPage from "./pages/EventsDetailPage";
import Donate from "./pages/DonatePage";
import VolunteerPage from "./pages/VolunteerPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import DonorBox from "./components/DonorBox";

import CampRegisterForm from "./components/CampRegisterForm";

//app file w/ react-router
const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/events">
        <EventsPage />
      </Route>

      <Route path="/events/2021camp">
        <EventsDetailPage
          eventName="2021 Summer STEAM Camp"
          backgroundColor="#fe545c"
          month="July"
          day="4"
          year="2021"
          imgSrc="/images/slider3.jpg"
          title="Event Details"
          paragraphOne="Our summer camp is focused on acheiving success in STEAM (Science, Technology, Engineering, and Mathematics). Providing them with academic and enrichment opportunities."
          paragraphTwo="Please join us in 2021 to help ignite their intellectual curiosity, develop self-confidence and instill a passion for protecting the planet by equitably distributing it's resources."
          startingTime="6:00AM to 6:00PM"
          location="Online!"
          contactEmail="thepavefoundation@gmail.com"
          formComponent={<CampRegisterForm />}
          blogTag={""}
        />
      </Route>

      <Route path="/events/givingtuesday">
        <EventsDetailPage
          eventName="2020 Giving Tuesday Fund Drive"
          backgroundColor="#26c5c5"
          month="Dec"
          day="1"
          year="2020"
          imgSrc="/images/slider2.jpg"
          title="Fund Drive"
          paragraphOne="Giving Tuesday, often stylized as #GivingTuesday for the purposes of hashtag activism, refers to the Tuesday after U.S. Thanksgiving in the United States. It is a global movement that unleashes the power of people and organizations to transform their communities and the world."
          paragraphTwo="Please join us on Tuesday, December 1, 2020 and beyond to donate and support our mission of paving the way for tomorrow's leaders. 
        And please, tell a friend!"
          startingTime="6:00AM to 6:00PM"
          location="Online!"
          contactEmail="thepavefoundation@gmail.com"
          blogTag={1}
          formComponent={<DonorBox />}
        />
      </Route>

      <Route path="/donate">
        <Donate />
      </Route>

      <Route path="/volunteer">
        <VolunteerPage />
      </Route>

      <Route path="/explore/gallery">
        <GalleryPage />
      </Route>

      <Route path="/about">
        <AboutPage />
      </Route>

      <Route path="/contact">
        <ContactPage />
      </Route>
    </Router>
  );
}

export default App;
