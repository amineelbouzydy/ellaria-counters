
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.css";

import Layout from './Components/shared/Layout';
import Home from './Containers/Home';
import Nano from './Containers/Nano';
import UltimaGo from './Containers/UltimaGo';
import UltimaAi from './Containers/UltimaAi';
import UltimaPrime from './Containers/UltimaPrime';
import BoostBi from './Containers/BoostBi';
import Contact from './Containers/Contact';
import Avis from './Containers/Avis';
import Blog from './Containers/Blog';
import Supporttechnique from './Containers/Supporttechnique';
import Tcx900 from './Containers/Tcx900';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='blog' element={<Blog />} />
        <Route path='support-technique' element={<Supporttechnique />} />
        <Route path='avis' element={<Avis />} />
        <Route path='contact' element={<Contact />} />
        <Route path='products/nano' element={<Nano />} />
        <Route path='products/ultima-ai' element={<UltimaAi />}  />
        <Route path='products/ultima-go' element={<UltimaGo />} />
        <Route path='products/ultima-prime' element={<UltimaPrime/>} />
        <Route path='products/boost-bi' element={<BoostBi/>} />
        <Route path='products/tcx900' element={<Tcx900/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
