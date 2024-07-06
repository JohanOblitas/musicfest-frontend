import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ManagerPanel from './pages/ManagerPanel';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="content-container">
      <Header />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/register" element={<Register />} />
        <Route path = "/manager-panel" element={<ManagerPanel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
