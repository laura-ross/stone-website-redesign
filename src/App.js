import React, { useState, useEffect } from "react";
import "./style/App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Art from "./components/Art";
import Photo from "./components/Photo";
import Music from "./components/Music";
import Gallery from "./components/Gallery";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from 'aos';

function App() {
  const [navMenuClasses, setNavMenuClasses] = useState("nav-menu-wrapper")

  useEffect(() => {
    AOS.init()
  })

  const handleOpenNavMenu = () => {
    setNavMenuClasses("nav-menu-wrapper open")
  }

  const handleCloseNavMenu = () => {
    setNavMenuClasses("nav-menu-wrapper")
  }

  return (
    <BrowserRouter>
    <div className="App">
      <nav class="top-nav">
        <h1 class="logo"><Link to="/home">Stone Malone</Link></h1>
        <div className={navMenuClasses}>
          <div onClick={handleCloseNavMenu} className="close-nav-btn">
            <i class="fas fa-times"></i>
          </div>
          <ul class="top-nav-links">
            <li><Link to="/art" onClick={handleCloseNavMenu}>Art</Link></li>
            <li><Link to="/photo" onClick={handleCloseNavMenu}>Photo</Link></li>
            <li><Link to="/music" onClick={handleCloseNavMenu}>Music</Link></li>
            <li><Link to="/gallery" onClick={handleCloseNavMenu}>Gallery</Link></li>
            <li><Link to="/bio" onClick={handleCloseNavMenu}>Bio</Link></li>
            <li><Link to="/contact" onClick={handleCloseNavMenu}>Contact</Link></li>
          </ul>
        </div>
        <div onClick={handleOpenNavMenu} className="nav-menu-toggle">
          <i className="nav-menu-icon fas fa-bars"></i>
        </div>
      </nav>

      <Switch>
        <Route path="/art" component={Art} />
        <Route path="/photo" component={Photo} />
        <Route path="/music" component={Music} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/bio" component={Bio} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
