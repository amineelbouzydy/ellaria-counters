
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.css";

import Layout from './Components/shared/Layout';
import Nano from './Containers/Nano';
import UltimaGo from './Containers/UltimaGo';
import UltimaAi from './Containers/UltimaAi';
import UltimaPrime from './Containers/UltimaPrime';
import BoostAi from './Containers/BoostAi';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Nano />} />
        <Route path='a-propos' element={<div>this is the home page</div>} />
        <Route path='avis' element={<div>this is the home page</div>} />
        <Route path='contact' element={<div>this is the home page</div>} />
        <Route path='products/nano' element={<Nano />} />
        <Route path='products/ultima-ai' element={<UltimaAi />}  />
        <Route path='products/ultima-go' element={<UltimaGo />} />
        <Route path='products/ultima-prime' element={<UltimaPrime/>} />
        <Route path='products/boost-ai' element={<BoostAi/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
