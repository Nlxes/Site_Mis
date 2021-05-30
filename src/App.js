import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { Page1 } from './Pages/Page1';
import { Page2 } from './Pages/Page2';
import { About } from './Pages/About';

function App() {
  return (
  <>
  <Router>
  <NaviBar/>  
  <Switch>
    <Route exact path ="/" component={ Home } />
    <Route exact path ="/Page1" component={ Page1 } />
    <Route exact path ="/Page2" component={ Page2 } />
    <Route exact path ="/About" component={ About } />
  </Switch>
  </Router>
  </> 
  );
}

export default App;