
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Calculator } from './components/projects/calculator/Calculator';
import SignInForm from './components/projects/signin/SignInForm';
import GameOne from './components/projects/gameOne/GameOne'
import { useState } from 'react';
import React from 'react';

function ErrorComponent() {
  return <div>eroor</div>
}


function App() {

  const [page, setPage] = useState((window.location.href).substr(21));
  // (window.location.href).substr(21) != page && setPage((window.location.href).substr(21)) 
  

  return (
    <div id='mainDiv'>
      <BrowserRouter>
        <Navbar currentChildHref={setPage} parentState = {page}/>
        <Switch>
          <Route path="/" render={(props) => (
            <Home {...props} currentChildHref={setPage} parentState={page} />
          )}  exact />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/about" render={(props) => (
            <About {...props} currentChildHref={setPage} parentState={page} />
          )} />
          <Route path="/contact" render={(props) => (
            <Contact {...props} currentChildHref={setPage} parentState={page} />
          )}  />
          <Route path="/calculator" render={(props) => (
            <Calculator {...props} currentChildHref={setPage} parentState={page} />
          )} />
          <Route path="/signin" render={(props) => (
            <SignInForm {...props} currentChildHref={setPage} parentState={page} />
          )} />
          <Route path="/gameone" render={(props) => (
            <GameOne {...props} currentChildHref={setPage} parentState={page} />
          )}  />
          <Route component={ErrorComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
