import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ManagerPanel from './pages/ManagerPanel';
import SearchResults from "./pages/SearchResults";
import ConcertsList from "./pages/ConcertsList";
import ConcertDetails from "./pages/ConcertDetails";
import BuyTickets from "./pages/BuyTickets";

function App() {
  return (
    <div className="content-container">
      <Header />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/register" element={<Register />} />
        <Route path = "/manager-panel" element={<ManagerPanel />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/concerts-list" element={<ConcertsList />} />
        <Route path="/concert-details/:id" element={<ConcertDetails />} />
        <Route path="/buy-tickets/:id" element={<BuyTickets />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
