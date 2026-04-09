import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './_context/AppContext';
import Header from './_features/header/Header';
import Sidebar from './_features/sidebar/Sidebar';
import Footer from './_features/footer/Footer';
import HomePage from './app/HomePage';
import './App.css';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <div className="app__body">
          <Sidebar />
          <main className="app__main">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
