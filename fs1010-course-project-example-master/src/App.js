import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'
import Portfolio from './components/pages/Portfolio'
import SignUp from './components/pages/SignUp'
import './components/css/index.css';




function App() {
  return (
   <BrowserRouter>
   
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute path="/submissions">
            <Listing />
          </PrivateRoute>
        </Switch>
        
        
    </BrowserRouter>
  )
}

export default App;
