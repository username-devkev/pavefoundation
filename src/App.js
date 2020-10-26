import React from "react";
//react router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { createBrowserHistory,useLocation } from "history";


// pages
import Index from "./pages/index";
import About from './pages/about';
import Events from './pages/events'
import EventsDetailPage from "./pages/eventsDetail";
import Donate from './pages/donate';
import Volunteer from './pages/volunteer'


//app file w/ react-router
const history = createBrowserHistory();
function App() {
  return (
  <Router history={history}>
    <Route exact path='/'>
      <Index />
    </Route>
    
    <Route path='/events'>

      <Events/>
      {/* Giving Tuesday */}
      {/* 2021 Camp */}
    </Route>

    <Route path='/donate'>
      <Donate/>
    </Route>

    <Route path='/volunteer'>
      <Volunteer/>
    </Route>

    <Route path=''></Route>

    <Route path='/explore'>
      <Switch>

      </Switch>
    </Route>
    

    <Route path='/about'>
      <About/>
      
    </Route>
   
    

  </Router>
  
  
  );
}

export default App;
