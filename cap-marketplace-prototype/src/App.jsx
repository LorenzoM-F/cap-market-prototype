import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from './pages/SignIn';
import Marketplace from './pages/Marketplace';
import OnlineStores from './pages/OnlineStores';
import StoreLocator from './pages/StoreLocator';
import CareerPortal from './pages/CareerPortal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/marketplace" exact element={<Marketplace />} />
          <Route path="/onlineStores" exact element={<OnlineStores />} />
          <Route path="/storeLocator" exact element={<StoreLocator />} />
          <Route path="/careerPortal" exact element={<CareerPortal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
