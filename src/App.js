// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Layout from './components/Layout/Layout.js';
import SplashPage from './components/Slides/Splash.js';
import Slide2 from "./components/Slides/Slide2.js";
import Slide3 from "./components/Slides/Slide3.js";
import Slide4 from "./components/Slides/Slide4.js";
import Slide5 from "./components/Slides/Slide5.js";
import Slide6 from "./components/Slides/Slide6.js";
import Slide7 from "./components/Slides/Slide7.js";
import Slide8 from "./components/Slides/Slide8Container.js";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout><SplashPage /></Layout>} />
        <Route path="/Slide2" element={<Layout><Slide2/></Layout>}/>
        <Route path="/Slide3" element={<Layout><Slide3/></Layout>}/>
        <Route path="/Slide4" element={<Layout><Slide4/></Layout>}/>
        <Route path="/Slide5" element={<Layout><Slide5/></Layout>}/>
        <Route path="/Slide6" element={<Layout><Slide6/></Layout>}/>
        <Route path="/Slide7" element={<Layout><Slide7/></Layout>}/>
        <Route path="/Slide8" element={<Layout><Slide8/></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
