import React, {Fragment} from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Alerts from './Components/layout/Alerts';



import JobState from './context/job/JobState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';




import './App.css';

const App = () => {
  return (
    <AuthState>
      <JobState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/Login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </JobState>
    </AuthState>
  );
}
 
export default App;


