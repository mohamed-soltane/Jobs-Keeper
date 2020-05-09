import React, {Fragment} from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import JobState from './context/job/JobState';

import './App.css';

const App = () => {
  return (
    <JobState>
    <Router>
  <Fragment>
     <Navbar />
     <div className="container">
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
       </Switch>
     </div>
        </Fragment>
        </Router>
        </JobState>
  );
}
 
export default App;


