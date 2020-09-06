import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import data from './data'

import MainProject from './components/MainProject'
const findProject = id => {
  return data.find(p => p.id == id)

}
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={(rp) => <Home {...rp} />} />
        <Route exact path="/about" render={(rp) => <About {...rp} />} />
        <Route exact path="/contact" render={(rp) => <Contact {...rp} />} />
        <Route exact path="/project/:id" render={(rp) => <MainProject project={findProject(rp.match.params.id)} />} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
