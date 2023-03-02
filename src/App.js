import React, { Component } from 'react'
import Navbar from "./component/navbar/navbar"
import Home from './component/pages/Home'
import About from './component/pages/About'
import Project from './component/pages/Project'
import Contact from './component/pages/contact'
import Footer from './component/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
class App extends Component {
  render() {

  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </Router>


  );
}
}
export default App;
