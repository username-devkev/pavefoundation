import React from "react";
//react router
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

// pages
import Index from "./pages/index";
import About from "./pages/about";
import Events from "./pages/events";
import EventsDetailPage from "./pages/eventsDetail";
import Donate from "./pages/donate";
import Volunteer from "./pages/volunteer";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Team from "./pages/team";

//app file w/ react-router
const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <Index />
      </Route>

      <Route exact path="/events">
        <Events />
      </Route>

      <Route path="/events/givingtuesday">
        <EventsDetailPage />
      </Route>

      <Route path="/events/2021camp">
        <EventsDetailPage />
      </Route>

      <Route path="/donate">
        <Donate />
      </Route>

      <Route path="/volunteer">
        <Volunteer />
      </Route>

      <Route path="/explore/gallery">
        <Gallery />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Router>
  );
}

export default App;
