import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from './pages/SignIn';
import Marketplace from './pages/Marketplace';
import OnlineStores from './pages/OnlineStores';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/marketplace" exact element={<Marketplace />} />
          <Route path="/onlineStores" exact element={<OnlineStores />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
