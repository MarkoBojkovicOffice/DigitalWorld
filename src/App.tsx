import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './_context/AppContext';
import Header from './_features/header/Header';
import Menu from './_features/menu/Menu';
import Footer from './_features/footer/Footer';
import HomePage from './app/HomePage';
import './App.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
