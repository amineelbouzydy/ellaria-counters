
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.css";

import Layout from './Components/Layout';
import Nano from './Components/Nano';
import UltimaGo from './Components/UltimaGo';
import UltimaAi from './Components/UltimaAi';
import UltimaPrime from './Components/UltimaPrime';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='accueil' element={<div>this is the home page</div>} />
        <Route path='a-propos' element={<div>this is the home page</div>} />
        <Route path='avis' element={<div>this is the home page</div>} />
        <Route path='contact' element={<div>this is the home page</div>} />
        <Route path='products/nano' element={<Nano />} />
        <Route path='products/ultima-ai' element={<UltimaAi />}  />
        <Route path='products/ultima-go' element={<UltimaGo />} />
        <Route path='products/ultima-prime' element={<UltimaPrime/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
